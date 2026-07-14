let creating = null;
async function setupOffscreenDocument(path) {
  if (await chrome.offscreen.hasDocument()) {
    return;
  }
  if (creating) {
    await creating;
  } else {
    creating = chrome.offscreen.createDocument({
      url: path,
      reasons: [chrome.offscreen.Reason.AUDIO_PLAYBACK],
      justification: "Playback of TTS audio"
    });
    await creating;
    creating = null;
  }
}
async function requestPlayTtsOffscreen(source, rate, volume, timestamp) {
  await setupOffscreenDocument("offscreen.html");
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({
      type: "playAudioOffscreen",
      data: { source, rate, volume, timestamp }
    }, () => resolve());
  });
}
async function requestPlaySpeechTTSOffscreen(text, voice, lang, rate, volume) {
  await setupOffscreenDocument("offscreen.html");
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({
      type: "playSpeechTTSOffscreen",
      data: { text, voice, lang, rate, volume }
    }, () => resolve());
  });
}
async function requestStopTtsOffscreen(timestamp) {
  await setupOffscreenDocument("offscreen.html");
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({
      type: "stopTTSOffscreen",
      data: { timestamp }
    }, () => resolve());
  });
}

const DB_NAME$1 = "BerkutDictionaryDB";
const DB_VERSION$1 = 3;
let db$1 = null;
async function openDB$1() {
  if (db$1) return db$1;
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME$1, DB_VERSION$1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      db$1 = request.result;
      resolve(db$1);
    };
    request.onupgradeneeded = (event) => {
      const dbInstance = event.target.result;
      if (!dbInstance.objectStoreNames.contains("phrasebook")) {
        dbInstance.createObjectStore("phrasebook", { keyPath: "id" });
      }
      if (!dbInstance.objectStoreNames.contains("pronunciations")) {
        dbInstance.createObjectStore("pronunciations");
      }
      if (!dbInstance.objectStoreNames.contains("dictionaryCache")) {
        dbInstance.createObjectStore("dictionaryCache");
      }
      if (!dbInstance.objectStoreNames.contains("ttsCache")) {
        dbInstance.createObjectStore("ttsCache");
      }
    };
  });
}
async function getTTSCache(key) {
  const db2 = await openDB$1();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("ttsCache", "readonly");
    const request = tx.objectStore("ttsCache").get(key);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
async function addTTSCache(key, audioDataUri) {
  const db2 = await openDB$1();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("ttsCache", "readwrite");
    tx.objectStore("ttsCache").put(audioDataUri, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function clearTTSCache() {
  const db2 = await openDB$1();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("ttsCache", "readwrite");
    tx.objectStore("ttsCache").clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

class EngineTTS {
  static async playAudioOffscreen(source, rate, volume, timestamp) {
    await requestPlayTtsOffscreen(source, rate, volume, timestamp);
  }
  // TTS Cache helpers
  static async getCachedAudio(key) {
    try {
      return await getTTSCache(key);
    } catch (e) {
      console.warn("Failed to read TTS cache:", e);
      return void 0;
    }
  }
  static async cacheAudio(key, audioDataUri) {
    try {
      await addTTSCache(key, audioDataUri);
    } catch (e) {
      console.warn("Failed to cache TTS audio:", e);
    }
  }
  static generateCacheKey(engine, voice, text, rate) {
    const textKey = encodeURIComponent(text.substring(0, 100));
    return `${engine}_${voice}_${textKey}_${rate}`;
  }
}

class GoogleTranslateTTS extends EngineTTS {
  async playTTSEngine(text, voice, lang, rate, volume, timestamp, bypassCache) {
    const textList = this.splitText(text, lang);
    for (const sentence of textList) {
      await this.playTTSByGoogle(sentence, voice, lang, rate, volume, timestamp, bypassCache);
    }
  }
  async playTTSByGoogle(text, voice, lang, rate, volume, timestamp, bypassCache) {
    const cacheKey = EngineTTS.generateCacheKey("google", lang, text, rate);
    if (!bypassCache) {
      const cachedAudio = await EngineTTS.getCachedAudio(cacheKey);
      if (cachedAudio) {
        await EngineTTS.playAudioOffscreen(cachedAudio, rate, volume, timestamp);
        return;
      }
    }
    const googleTranslateTtsUrl = `https://translate.googleapis.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
      text
    )}&tl=${lang}&client=tw-ob`;
    await EngineTTS.playAudioOffscreen(googleTranslateTtsUrl, rate, volume, timestamp);
    this.cacheAudioFromUrl(googleTranslateTtsUrl, cacheKey).catch(() => {
    });
  }
  async cacheAudioFromUrl(url, cacheKey) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const blob = await response.blob();
        const dataUri = await this.blobToDataUri(blob);
        await EngineTTS.cacheAudio(cacheKey, dataUri);
      }
    } catch (e) {
    }
  }
  blobToDataUri(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
  splitText(text, lang) {
    try {
      const segmenter = new Intl.Segmenter(lang, { granularity: "sentence" });
      const wordsMeta = [...segmenter.segment(text)];
      const wordList = wordsMeta.map((word) => word.segment);
      return wordList;
    } catch (e) {
      return text.split(/([.?!])\s+/).filter((s) => s.trim().length > 0);
    }
  }
}

class BrowserTTS extends EngineTTS {
  async playTTSEngine(text, voice, lang, rate, volume, timestamp) {
    await requestPlaySpeechTTSOffscreen(text, voice, lang, rate, volume);
  }
}

class BingTTS extends EngineTTS {
  static BING_URL = "https://www.bing.com/tfettts";
  static TOKEN_URL = "https://www.bing.com/translator";
  static token = null;
  async playTTSEngine(text, voice, lang, rate, volume, timestamp, bypassCache) {
    try {
      const cacheKey = EngineTTS.generateCacheKey("bing", voice, text, rate);
      if (!bypassCache) {
        const cachedAudio = await EngineTTS.getCachedAudio(cacheKey);
        if (cachedAudio) {
          await EngineTTS.playAudioOffscreen(cachedAudio, 1, volume, timestamp);
          return;
        }
      }
      const dataUri = await this.synthesize(text, voice, rate, volume);
      if (dataUri) {
        await EngineTTS.cacheAudio(cacheKey, dataUri);
        await EngineTTS.playAudioOffscreen(dataUri, 1, volume, timestamp);
      }
    } catch (e) {
      console.error("[BingTTS] Synthesis failed:", e);
    }
  }
  async synthesize(text, voice, rate, volume) {
    const { token, key, IG, IID } = await this.getBingAccessToken();
    let locale = "en-US";
    const parts = voice.split("-");
    if (parts.length >= 3) {
      locale = parts.slice(0, -1).join("-");
    }
    const ratePercentage = Math.round(rate * 100 - 100);
    const rateStr = ratePercentage >= 0 ? `+${ratePercentage}%` : `${ratePercentage}%`;
    const volPercentage = Math.round(volume * 100);
    const ssml = `<speak version='1.0' xml:lang='${locale}'><voice name='${voice}'><prosody rate='${rateStr}' volume='${volPercentage}%'>${this.escapeXml(text)}</prosody></voice></speak>`;
    const params = new URLSearchParams();
    params.append("ssml", ssml);
    params.append("token", token);
    params.append("key", key);
    const url = new URL(BingTTS.BING_URL);
    url.searchParams.append("IG", IG);
    url.searchParams.append("IID", IID && IID.length ? IID + "." + BingTTS.token.count++ : "");
    url.searchParams.append("isVertical", "1");
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params
    });
    if (!response.ok) {
      throw new Error(`Bing TTS API Error: ${response.status} ${response.statusText}`);
    }
    const blob = await response.blob();
    return await this.blobToDataUri(blob);
  }
  async getBingAccessToken() {
    if (!BingTTS.token || Date.now() - parseInt(BingTTS.token.tokenTs) > BingTTS.token.tokenExpiryInterval) {
      const response = await fetch(BingTTS.TOKEN_URL);
      const text = await response.text();
      const IGMatch = text.match(/IG:"([^"]+)"/);
      const IIDMatch = text.match(/data-iid="([^"]+)"/);
      const paramsMatch = text.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/);
      if (!IGMatch || !IIDMatch || !paramsMatch) {
        throw new Error("Failed to parse Bing Access Token");
      }
      const IG = IGMatch[1];
      const IID = IIDMatch[1];
      const [_key, _token, interval] = JSON.parse(paramsMatch[1]);
      BingTTS.token = {
        IG,
        IID,
        key: _key,
        token: _token,
        tokenTs: Date.now().toString(),
        // Use current time as base? Reference uses _key which is weird.
        // Reference: tokenTs: _key. Wait, _key is a timestamp? 
        // In reference: var [_key, _token, interval] = ...
        // this.bingAccessToken["tokenTs"] > this.bingAccessToken["tokenExpiryInterval"]
        // It treats _key as the timestamp.
        // Let's assume _key is the timestamp.
        tokenExpiryInterval: interval,
        count: 0
      };
    }
    return BingTTS.token;
  }
  escapeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, function(c) {
      switch (c) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "&":
          return "&amp;";
        case "'":
          return "&apos;";
        case '"':
          return "&quot;";
      }
      return c;
    });
  }
  blobToDataUri(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}

class ChromeTTS extends EngineTTS {
  async playTTSEngine(text, voice, lang, rate, volume, timestamp) {
    return new Promise((resolve) => {
      chrome.tts.speak(text, {
        lang,
        voiceName: voice,
        volume,
        rate,
        onEvent: (event) => {
          if (["end", "interrupted", "cancelled", "error"].includes(event.type)) {
            resolve();
          }
        }
      });
    });
  }
  // Get voices from chrome.tts API
  static async getVoices() {
    return new Promise((resolve) => {
      chrome.tts.getVoices((voices) => {
        resolve(voices || []);
      });
    });
  }
}

const engines = {
  "GoogleTranslateTTS": GoogleTranslateTTS,
  "BrowserTTS": BrowserTTS,
  "BingTTS": BingTTS,
  "ChromeTTS": ChromeTTS
};
const engineInstances = {};
function getEngine(name) {
  if (!engineInstances[name]) {
    if (engines[name]) {
      engineInstances[name] = new engines[name]();
    } else {
      engineInstances[name] = new BrowserTTS();
    }
  }
  return engineInstances[name];
}
class TTS {
  static stopTtsTimestamp = 0;
  static noInterrupt = false;
  static async playTtsQueue(options) {
    this.noInterrupt = options.noInterrupt || false;
    const ttsTarget = options.voiceTarget || options.setting.voiceTarget || "source";
    const ttsRepeat = options.voiceRepeat || options.setting.voiceRepeat || 1;
    for (let i = 0; i < Number(ttsRepeat); i++) {
      if (ttsTarget == "source") {
        await this.playTts(options.sourceText, options.sourceLang, options.timestamp, options.setting);
      } else if (ttsTarget == "target") {
        await this.playTts(options.targetText, options.targetLang, options.timestamp, options.setting);
      } else if (ttsTarget == "sourcetarget") {
        await this.playTts(options.sourceText, options.sourceLang, options.timestamp, options.setting);
        await this.playTts(options.targetText, options.targetLang, options.timestamp, options.setting);
      } else if (ttsTarget == "targetsource") {
        await this.playTts(options.targetText, options.targetLang, options.timestamp, options.setting);
        await this.playTts(options.sourceText, options.sourceLang, options.timestamp, options.setting);
      }
    }
  }
  static async playTts(text, lang, timestamp, setting) {
    await this.stopTTS(timestamp);
    if (Number(timestamp) < this.stopTtsTimestamp) {
      return;
    }
    if (!text) return;
    const isTranslateTargetLang = lang == setting.translateTarget;
    let volume = Number(setting.voiceVolume || 1);
    let rate = Number(setting.voiceRate || 1);
    if (isTranslateTargetLang && setting.voiceTranslatedRate != "default") {
      rate = Number(setting.voiceTranslatedRate);
    }
    const voiceFullName = setting[`ttsVoice_${lang}`];
    let engineName = "BrowserTTS";
    let voice = voiceFullName;
    if (voiceFullName) {
      if (voiceFullName.startsWith("BrowserTTS_")) {
        engineName = "BrowserTTS";
        voice = voiceFullName.replace("BrowserTTS_", "");
      } else if (voiceFullName.startsWith("ChromeTTS_")) {
        engineName = "ChromeTTS";
        voice = voiceFullName.replace("ChromeTTS_", "");
      } else if (voiceFullName === "GoogleTranslateTTS") {
        engineName = "GoogleTranslateTTS";
      } else if (voiceFullName.startsWith("BingTTS")) {
        const parts = voiceFullName.split("_");
        engineName = parts[0];
        voice = parts.slice(1).join("_");
      }
    }
    const engine = getEngine(engineName);
    await engine.playTTSEngine(text, voice, lang, rate, volume, timestamp, setting.bypassCache);
  }
  static async stopTTS(timestamp = Date.now(), force = false) {
    if (this.noInterrupt && !force) {
      return;
    }
    timestamp = Number(timestamp);
    if (timestamp < this.stopTtsTimestamp) {
      return;
    }
    this.stopTtsTimestamp = timestamp;
    await requestStopTtsOffscreen(timestamp);
  }
}

class CerebrasAPIError extends Error {
  status;
  retryAfter;
  // in milliseconds
  constructor(message, status, retryAfter) {
    super(message);
    this.name = "CerebrasAPIError";
    this.status = status;
    this.retryAfter = retryAfter;
  }
}
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1e3;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function getApiKey() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["cerebrasApiKey"], (result) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
        return;
      }
      if (!result.cerebrasApiKey) {
        reject(new Error("API key not configured. Please set your Cerebras API key in Settings."));
        return;
      }
      resolve(result.cerebrasApiKey);
    });
  });
}
async function getCartesiaApiKey() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["cartesiaApiKey"], (result) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
        return;
      }
      if (!result.cartesiaApiKey) {
        reject(new Error("Cartesia API key not configured. Please set it in Settings."));
        return;
      }
      resolve(result.cartesiaApiKey);
    });
  });
}
async function getCerebrasModel() {
  return new Promise((resolve) => {
    chrome.storage.local.get(["cerebrasModel"], (result) => {
      resolve(result.cerebrasModel || "llama3.1-8b");
    });
  });
}
async function getTranslationEngine() {
  return new Promise((resolve) => {
    chrome.storage.local.get(["translationEngine"], (result) => {
      resolve(result.translationEngine || "cerebras");
    });
  });
}
async function fetchCerebras(messages, options = {}) {
  let jsonMode = false;
  let temperature = 0.3;
  let maxTokens = 1500;
  if (typeof options === "boolean") {
    jsonMode = options;
  } else {
    if (options.jsonMode !== void 0) jsonMode = options.jsonMode;
    if (options.temperature !== void 0) temperature = options.temperature;
    if (options.maxTokens !== void 0) maxTokens = options.maxTokens;
  }
  const apiKey = await getApiKey();
  const model = await getCerebrasModel();
  const url = "https://api.cerebras.ai/v1/chat/completions";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages,
      response_format: jsonMode ? { type: "json_object" } : void 0,
      temperature,
      max_tokens: maxTokens
    })
  });
  if (!response.ok) {
    const errorText = await response.text();
    let errorMessage = `API Error: ${response.status} ${response.statusText}`;
    try {
      const errorJson = JSON.parse(errorText);
      if (errorJson.error?.message) {
        errorMessage = errorJson.error.message;
      }
    } catch {
    }
    let retryAfter;
    if (response.status === 429) {
      const retryAfterHeader = response.headers.get("Retry-After");
      if (retryAfterHeader) {
        const parsed = parseInt(retryAfterHeader, 10);
        if (!isNaN(parsed)) {
          retryAfter = parsed * 1e3;
        }
      }
    }
    throw new CerebrasAPIError(errorMessage, response.status, retryAfter);
  }
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "";
}
async function fetchCartesiaTTS(text) {
  const apiKey = await getCartesiaApiKey();
  const url = "https://api.cartesia.ai/tts/bytes";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Cartesia-Version": "2024-06-10",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model_id: "sonic-english",
      transcript: text,
      voice: {
        mode: "id",
        id: "f786b574-daa5-4673-aa0c-cbe3e8534c02"
        // Katie (American English)
      },
      output_format: {
        container: "wav",
        encoding: "pcm_f32le",
        sample_rate: 44100
      }
    })
  });
  if (!response.ok) {
    let msg = `TTS Error: ${response.status}`;
    try {
      const err = await response.json();
      if (err.message) msg = err.message;
    } catch {
    }
    throw new Error(msg);
  }
  const arrayBuffer = await response.arrayBuffer();
  return Array.from(new Uint8Array(arrayBuffer));
}
async function fetchCerebrasModels() {
  let apiKey = "";
  try {
    apiKey = await getApiKey();
  } catch (e) {
  }
  const url = apiKey ? "https://api.cerebras.ai/v1/models" : "https://api.cerebras.ai/public/v1/models";
  const headers = {
    "Content-Type": "application/json"
  };
  if (apiKey) {
    headers["Authorization"] = `Bearer ${apiKey}`;
  }
  try {
    const response = await fetch(url, {
      method: "GET",
      headers
    });
    if (!response.ok) {
      if (apiKey) {
        const fallbackResponse = await fetch("https://api.cerebras.ai/public/v1/models", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (fallbackResponse.ok) {
          const data2 = await fallbackResponse.json();
          if (data2 && Array.isArray(data2.data)) {
            return data2.data.map((m) => m.id);
          }
        }
      }
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if (data && Array.isArray(data.data)) {
      return data.data.map((m) => m.id);
    }
    return ["llama3.1-8b", "llama3.1-70b", "llama3.3-70b"];
  } catch (err) {
    console.error("Error fetching Cerebras models from network, using public fallback:", err);
    try {
      const publicResponse = await fetch("https://api.cerebras.ai/public/v1/models", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      if (publicResponse.ok) {
        const data = await publicResponse.json();
        if (data && Array.isArray(data.data)) {
          return data.data.map((m) => m.id);
        }
      }
    } catch (pubErr) {
      console.error("Public models fetch failed too:", pubErr);
    }
    return ["llama3.1-8b", "llama3.1-70b", "llama3.3-70b"];
  }
}
async function withRetry(fn, retries = MAX_RETRIES, delayMs = RETRY_DELAY_MS) {
  let lastError = null;
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn(`Attempt ${attempt + 1}/${retries} failed:`, lastError.message);
      if (lastError.message.includes("API key") || lastError.message.includes("401") || lastError instanceof CerebrasAPIError && lastError.status === 401) {
        throw lastError;
      }
      if (attempt < retries - 1) {
        let backoffDelay = delayMs * Math.pow(2, attempt) + Math.random() * 500;
        if (lastError instanceof CerebrasAPIError && lastError.status === 429) {
          backoffDelay = lastError.retryAfter || 5e3;
          console.warn(`Rate limited (429). Waiting for ${backoffDelay}ms before retry...`);
        }
        await delay(backoffDelay);
      }
    }
  }
  throw lastError || new Error("All retry attempts failed");
}
const LANGUAGE_CODE_MAP = {
  "Persian": "fa",
  "Russian": "ru",
  "English": "en",
  "German": "de",
  "Chinese": "zh-CN",
  "Arabic": "ar",
  "Spanish": "es",
  "Portuguese": "pt",
  "Italian": "it",
  "Japanese": "ja",
  "Korean": "ko",
  "Turkish": "tr"
};
async function fetchGoogleTranslate(text, targetLanguageName) {
  const targetLang = LANGUAGE_CODE_MAP[targetLanguageName] || "en";
  const apiUrl = "https://translate.googleapis.com/translate_a/single";
  const params = new URLSearchParams({
    client: "gtx",
    q: text,
    sl: "auto",
    tl: targetLang,
    dj: "1",
    hl: targetLang
  }).toString() + "&dt=rm&dt=bd&dt=t";
  const response = await fetch(`${apiUrl}?${params}`);
  if (!response.ok) {
    throw new Error(`Google Translate API error: ${response.statusText}`);
  }
  const res = await response.json();
  let translation = res.sentences?.map((sentence) => sentence.trans).filter((trans) => trans).join(" ") || "";
  if (translation) {
    translation = translation.replace(/\n /g, "\n");
  }
  const detectedLang = res.src || "en";
  return {
    translation,
    detectedLang,
    dict: res.dict
  };
}
async function fetchFreeDictionary(word) {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
  if (!response.ok) {
    throw new Error(`Free Dictionary API error: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
async function translateArray(arr, targetLang) {
  const res = [];
  for (const item of arr) {
    try {
      const transRes = await fetchGoogleTranslate(item, targetLang);
      res.push(transRes.translation);
    } catch {
      res.push(item);
    }
  }
  return res;
}
async function fetchWordInfoGoogle(word, targetLanguage = "English") {
  const googleRes = await fetchGoogleTranslate(word, targetLanguage);
  const translation = googleRes.translation;
  const detectedLang = googleRes.detectedLang;
  let phonetic = "";
  let meaning = `Definition of "${word}" in ${targetLanguage}`;
  let example = `No example available for "${word}" in local engine.`;
  const synonyms = [];
  const synonymsTranslation = [];
  const antonyms = [];
  const antonymsTranslation = [];
  const nouns = [];
  const verbs = [];
  const adjectives = [];
  const adverbs = [];
  const hypernyms = [];
  const hyponyms = [];
  if (googleRes.dict && Array.isArray(googleRes.dict)) {
    for (const d of googleRes.dict) {
      const pos = d.pos;
      const terms = d.terms || [];
      if (pos === "noun") {
        nouns.push(...terms.slice(0, 3));
      } else if (pos === "verb") {
        verbs.push(...terms.slice(0, 3));
      } else if (pos === "adjective") {
        adjectives.push(...terms.slice(0, 3));
      } else if (pos === "adverb") {
        adverbs.push(...terms.slice(0, 3));
      }
      if (synonyms.length < 5) {
        synonyms.push(...terms.slice(0, 5 - synonyms.length));
      }
    }
  }
  if (detectedLang === "en" || /^[a-zA-Z\s\-]+$/.test(word)) {
    try {
      const dictData = await fetchFreeDictionary(word);
      if (dictData && Array.isArray(dictData) && dictData[0]) {
        const entry = dictData[0];
        if (entry.phonetic) {
          phonetic = entry.phonetic;
        } else if (entry.phonetics && entry.phonetics.length > 0) {
          const firstWithText = entry.phonetics.find((p) => p.text);
          if (firstWithText) phonetic = firstWithText.text;
        }
        if (entry.meanings && entry.meanings.length > 0) {
          const firstMeaning = entry.meanings[0];
          if (firstMeaning.definitions && firstMeaning.definitions.length > 0) {
            meaning = firstMeaning.definitions[0].definition || meaning;
            example = firstMeaning.definitions[0].example || example;
          }
          for (const m of entry.meanings) {
            const mPos = m.partOfSpeech;
            const defs = m.definitions || [];
            const mTerms = defs.flatMap((d) => d.synonyms || []).concat(m.synonyms || []);
            const mAnts = defs.flatMap((d) => d.antonyms || []).concat(m.antonyms || []);
            if (mTerms.length > 0 && synonyms.length < 5) {
              synonyms.push(...mTerms.slice(0, 5 - synonyms.length));
            }
            if (mAnts.length > 0 && antonyms.length < 5) {
              antonyms.push(...mAnts.slice(0, 5 - antonyms.length));
            }
            const wordsToCollect = mTerms.slice(0, 3);
            if (wordsToCollect.length > 0) {
              if (mPos === "noun" && nouns.length === 0) {
                nouns.push(...wordsToCollect);
              } else if (mPos === "verb" && verbs.length === 0) {
                verbs.push(...wordsToCollect);
              } else if (mPos === "adjective" && adjectives.length === 0) {
                adjectives.push(...wordsToCollect);
              } else if (mPos === "adverb" && adverbs.length === 0) {
                adverbs.push(...wordsToCollect);
              }
            }
          }
        }
      }
    } catch (err) {
      console.warn("Free Dictionary lookup failed, falling back to Google Translate data only.", err);
    }
  }
  for (const syn of synonyms) {
    try {
      const transRes = await fetchGoogleTranslate(syn, targetLanguage);
      synonymsTranslation.push(transRes.translation);
    } catch (e) {
      synonymsTranslation.push(syn);
    }
  }
  for (const ant of antonyms) {
    try {
      const transRes = await fetchGoogleTranslate(ant, targetLanguage);
      antonymsTranslation.push(transRes.translation);
    } catch (e) {
      antonymsTranslation.push(ant);
    }
  }
  const nounsTranslation = await translateArray(nouns, targetLanguage);
  const verbsTranslation = await translateArray(verbs, targetLanguage);
  const adjectivesTranslation = await translateArray(adjectives, targetLanguage);
  const adverbsTranslation = await translateArray(adverbs, targetLanguage);
  const hypernymsTranslation = await translateArray(hypernyms, targetLanguage);
  const hyponymsTranslation = await translateArray(hyponyms, targetLanguage);
  return {
    word,
    phonetic,
    meaning,
    example,
    translation,
    targetLanguage,
    synonyms: synonyms.slice(0, 5),
    synonymsTranslation: synonymsTranslation.slice(0, 5),
    antonyms: antonyms.slice(0, 5),
    antonymsTranslation: antonymsTranslation.slice(0, 5),
    nouns: nouns.slice(0, 3),
    nounsTranslation: nounsTranslation.slice(0, 3),
    verbs: verbs.slice(0, 3),
    verbsTranslation: verbsTranslation.slice(0, 3),
    adjectives: adjectives.slice(0, 3),
    adjectivesTranslation: adjectivesTranslation.slice(0, 3),
    adverbs: adverbs.slice(0, 3),
    adverbsTranslation: adverbsTranslation.slice(0, 3),
    hypernyms: hypernyms.slice(0, 3),
    hypernymsTranslation: hypernymsTranslation.slice(0, 3),
    hyponyms: hyponyms.slice(0, 3),
    hyponymsTranslation: hyponymsTranslation.slice(0, 3)
  };
}
async function analyzePassageGoogle(passage, targetLanguage = "English") {
  const googleRes = await fetchGoogleTranslate(passage, targetLanguage);
  const summaryTranslation = googleRes.translation;
  const sentences = passage.split(/[.!?]+/).map((s) => s.trim()).filter((s) => s.length > 0);
  const summary = sentences.slice(0, 2).join(". ") + (sentences.length > 2 ? "." : "");
  const words = passage.toLowerCase().replace(/[^a-zA-Z\s]/g, "").split(/\s+/);
  const stopWords = /* @__PURE__ */ new Set(["the", "a", "and", "or", "but", "is", "are", "was", "were", "to", "in", "on", "at", "by", "of", "for", "with", "an", "it", "this", "that", "these", "those", "i", "you", "he", "she", "they", "we"]);
  const counts = {};
  for (const w of words) {
    if (w.length > 3 && !stopWords.has(w)) {
      counts[w] = (counts[w] || 0) + 1;
    }
  }
  const keyConcepts = Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 4).map((w) => w.charAt(0).toUpperCase() + w.slice(1));
  return {
    summary,
    keyConcepts,
    summaryTranslation,
    targetLanguage
  };
}
async function fetchWordInfo(word, targetLanguage = "English") {
  const systemPrompt = `You are a specialized dictionary assistant for ${targetLanguage} speakers. You must output valid JSON only matching this schema exactly:
    {
      "word": "string",
      "phonetic": "string (IPA)",
      "meaning": "string (Clear English definition)",
      "example": "string (English example sentence)",
      "translation": "string (${targetLanguage} translation)",
      "synonyms": ["string"],
      "synonymsTranslation": ["string"],
      "antonyms": ["string"],
      "antonymsTranslation": ["string"],
      "nouns": ["string"],
      "nounsTranslation": ["string"],
      "verbs": ["string"],
      "verbsTranslation": ["string"],
      "adjectives": ["string"],
      "adjectivesTranslation": ["string"],
      "adverbs": ["string"],
      "adverbsTranslation": ["string"],
      "hypernyms": ["string"],
      "hypernymsTranslation": ["string"],
      "hyponyms": ["string"],
      "hyponymsTranslation": ["string"]
    }
    Important constraints:
    - Keep definitions and translations concise.
    - Return a maximum of 5 synonyms and antonyms.
    - Return a maximum of 3 nouns, verbs, adjectives, adverbs, hypernyms, and hyponyms.
    - Translations arrays (e.g. synonymsTranslation) must match the length and order of their English counterpart arrays.`;
  const userPrompt = `Word: "${word}"`;
  const jsonText = await fetchCerebras([
    { role: "system", content: systemPrompt },
    { role: "user", content: userPrompt }
  ], { jsonMode: true, temperature: 0.3, maxTokens: 1500 });
  try {
    const entry = JSON.parse(jsonText);
    entry.targetLanguage = targetLanguage;
    return entry;
  } catch (e) {
    console.error("Failed to parse JSON from Cerebras:", jsonText);
    throw new Error("Invalid response format from API");
  }
}
async function analyzePassage(passage, targetLanguage = "English") {
  const systemPrompt = `You are an AI assistant capable of analyzing text. You must output valid JSON only matching this schema:
    {
        "summary": "string (one-paragraph summary)",
        "keyConcepts": ["string"],
        "summaryTranslation": "string (${targetLanguage} translation of the summary)"
    }
    Important constraints:
    - Keep keyConcepts list to a maximum of 5 items.`;
  const truncated = passage.length > 3e3 ? passage.substring(0, 3e3) + "..." : passage;
  const userPrompt = `Analyze: "${truncated}"`;
  const jsonText = await fetchCerebras([
    { role: "system", content: systemPrompt },
    { role: "user", content: userPrompt }
  ], { jsonMode: true, temperature: 0.4, maxTokens: 800 });
  try {
    const analysis = JSON.parse(jsonText.trim());
    analysis.targetLanguage = targetLanguage;
    return analysis;
  } catch (e) {
    console.error("Failed to parse JSON from Cerebras:", jsonText);
    throw new Error("Invalid response format from API");
  }
}
async function fetchSpellingSuggestion(word) {
  const systemPrompt = `You are a precise spell checker. Reply with ONLY the corrected word. Do not explain or add anything else. If the word is already spelled correctly, reply with the original word itself.`;
  const userPrompt = word;
  const suggestion = await fetchCerebras([
    { role: "system", content: systemPrompt },
    { role: "user", content: userPrompt }
  ], { temperature: 0, maxTokens: 20 });
  const trimmed = suggestion.trim().replace(/['"]/g, "");
  if (trimmed.toLowerCase() === word.toLowerCase()) return "";
  return trimmed;
}
async function askAI(context, question) {
  const truncatedContext = context.length > 2e3 ? context.substring(0, 2e3) + "..." : context;
  const messages = [];
  if (truncatedContext && truncatedContext.trim().length > 0) {
    messages.push({ role: "system", content: `Context: "${truncatedContext}". Base your answer on this context.` });
  }
  messages.push({ role: "user", content: `Question: "${question}"

Answer the question concisely and accurately in 2-3 sentences.` });
  return await fetchCerebras(messages, { temperature: 0.5, maxTokens: 500 });
}
const DB_NAME = "BerkutDictionaryDB";
const DB_VERSION = 3;
let db = null;
async function openDB() {
  if (db) return db;
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };
    request.onupgradeneeded = (event) => {
      const dbInstance = event.target.result;
      if (!dbInstance.objectStoreNames.contains("phrasebook")) {
        dbInstance.createObjectStore("phrasebook", { keyPath: "id" });
      }
      if (!dbInstance.objectStoreNames.contains("pronunciations")) {
        dbInstance.createObjectStore("pronunciations");
      }
      if (!dbInstance.objectStoreNames.contains("dictionaryCache")) {
        dbInstance.createObjectStore("dictionaryCache");
      }
      if (!dbInstance.objectStoreNames.contains("ttsCache")) {
        dbInstance.createObjectStore("ttsCache");
      }
    };
  });
}
async function getAllPhrases() {
  const db2 = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("phrasebook", "readonly");
    const request = tx.objectStore("phrasebook").getAll();
    request.onsuccess = () => resolve(request.result.sort((a, b) => parseInt(b.id) - parseInt(a.id)));
    request.onerror = () => reject(request.error);
  });
}
async function addPhrase(phrase) {
  const db2 = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("phrasebook", "readwrite");
    tx.objectStore("phrasebook").put(phrase);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function deletePhrase(id) {
  const db2 = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("phrasebook", "readwrite");
    tx.objectStore("phrasebook").delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function clearAllPhrases() {
  const db2 = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("phrasebook", "readwrite");
    tx.objectStore("phrasebook").clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function getDictionaryEntry(word) {
  const db2 = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("dictionaryCache", "readonly");
    const request = tx.objectStore("dictionaryCache").get(word.toLowerCase());
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
async function addDictionaryEntry(entry) {
  const db2 = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("dictionaryCache", "readwrite");
    tx.objectStore("dictionaryCache").put(entry, entry.word.toLowerCase());
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function clearDictionaryCache() {
  const db2 = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("dictionaryCache", "readwrite");
    tx.objectStore("dictionaryCache").clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function getPronunciation(word) {
  const db2 = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("pronunciations", "readonly");
    const request = tx.objectStore("pronunciations").get(word.toLowerCase());
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
async function addPronunciation(word, audio) {
  const db2 = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("pronunciations", "readwrite");
    tx.objectStore("pronunciations").put(audio, word.toLowerCase());
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function clearPronunciations() {
  const db2 = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db2.transaction("pronunciations", "readwrite");
    tx.objectStore("pronunciations").clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    const handleRequest = async () => {
      try {
        switch (request.type) {
          case "PLAY_TTS":
            await TTS.playTtsQueue(request.payload);
            return { success: true };
          case "STOP_TTS":
            await TTS.stopTTS(request.payload.timestamp);
            return { success: true };
          case "FETCH_WORD_INFO": {
            const engine = await getTranslationEngine();
            if (engine === "google") {
              return await fetchWordInfoGoogle(request.payload.word, request.payload.targetLanguage);
            }
            return await withRetry(() => fetchWordInfo(request.payload.word, request.payload.targetLanguage));
          }
          case "ANALYZE_PASSAGE": {
            const engine = await getTranslationEngine();
            if (engine === "google") {
              return await analyzePassageGoogle(request.payload.passage, request.payload.targetLanguage);
            }
            return await withRetry(() => analyzePassage(request.payload.passage, request.payload.targetLanguage));
          }
          case "FETCH_PRONUNCIATION":
            return await withRetry(() => fetchCartesiaTTS(request.payload.word));
          case "FETCH_SPELLING_SUGGESTION":
            return await withRetry(() => fetchSpellingSuggestion(request.payload.word), 1);
          case "FETCH_CEREBRAS_MODELS":
            return await fetchCerebrasModels();
          case "ASK_AI":
            return await withRetry(() => askAI(request.payload.context, request.payload.question));
          case "SET_API_KEY":
            return new Promise((resolve, reject) => {
              chrome.storage.local.set({ cerebrasApiKey: request.payload.apiKey }, () => {
                if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
                else resolve({ success: true });
              });
            });
          case "SET_CARTESIA_KEY":
            return new Promise((resolve, reject) => {
              chrome.storage.local.set({ cartesiaApiKey: request.payload.apiKey }, () => {
                if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
                else resolve({ success: true });
              });
            });
          case "GET_API_KEY":
            return new Promise((resolve) => {
              chrome.storage.local.get(["cerebrasApiKey"], (result) => {
                resolve({ apiKey: result.cerebrasApiKey || "" });
              });
            });
          case "GET_CARTESIA_KEY":
            return new Promise((resolve) => {
              chrome.storage.local.get(["cartesiaApiKey"], (result) => {
                resolve({ apiKey: result.cartesiaApiKey || "" });
              });
            });
          case "CHECK_API_KEY":
            return new Promise((resolve) => {
              chrome.storage.local.get(["cerebrasApiKey"], (result) => {
                resolve({ hasApiKey: !!result.cerebrasApiKey });
              });
            });
          case "WAKE_UP":
            return { woke: true };
          // --- IDB Operations ---
          case "GET_ALL_PHRASES":
            return await getAllPhrases();
          case "ADD_PHRASE":
            await addPhrase(request.payload.phrase);
            return { success: true };
          case "DELETE_PHRASE":
            await deletePhrase(request.payload.id);
            return { success: true };
          case "CLEAR_ALL_PHRASES":
            await clearAllPhrases();
            return { success: true };
          case "GET_DICTIONARY_ENTRY":
            const cached = await getDictionaryEntry(request.payload.word);
            if (cached && !cached.nouns) {
              return null;
            }
            return cached;
          case "ADD_DICTIONARY_ENTRY":
            await addDictionaryEntry(request.payload.entry);
            return { success: true };
          case "CLEAR_DICTIONARY_CACHE":
            await clearDictionaryCache();
            return { success: true };
          case "GET_PRONUNCIATION":
            return await getPronunciation(request.payload.word);
          case "ADD_PRONUNCIATION":
            await addPronunciation(request.payload.word, request.payload.audio);
            return { success: true };
          case "CLEAR_PRONUNCIATIONS":
            await clearPronunciations();
            return { success: true };
          case "GET_TTS_CACHE":
            return await getTTSCache(request.payload.key);
          case "ADD_TTS_CACHE":
            await addTTSCache(request.payload.key, request.payload.audioDataUri);
            return { success: true };
          case "CLEAR_TTS_CACHE":
            await clearTTSCache();
            return { success: true };
          default:
            console.warn(`Unknown message type received in background: ${request.type}`, { request, sender });
            return {
              error: `Unknown message type: ${request.type}`,
              knownTypes: [
                "FETCH_WORD_INFO",
                "ANALYZE_PASSAGE",
                "FETCH_PRONUNCIATION",
                "FETCH_SPELLING_SUGGESTION",
                "ASK_AI",
                "SET_API_KEY",
                "SET_CARTESIA_KEY",
                "GET_API_KEY",
                "GET_CARTESIA_KEY",
                "CHECK_API_KEY",
                "WAKE_UP",
                "GET_ALL_PHRASES",
                "ADD_PHRASE",
                "DELETE_PHRASE",
                "CLEAR_ALL_PHRASES",
                "GET_DICTIONARY_ENTRY",
                "ADD_DICTIONARY_ENTRY",
                "CLEAR_DICTIONARY_CACHE",
                "GET_PRONUNCIATION",
                "ADD_PRONUNCIATION",
                "CLEAR_PRONUNCIATIONS",
                "GET_TTS_CACHE",
                "ADD_TTS_CACHE",
                "CLEAR_TTS_CACHE",
                "PLAY_TTS",
                "STOP_TTS"
              ]
            };
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        console.error("Background worker error:", errorMessage);
        throw error;
      }
    };
    handleRequest().then((result) => sendResponse({ success: true, data: result })).catch((error) => sendResponse({ success: false, error: error instanceof Error ? error.message : String(error) }));
    return true;
  }
);
console.log("Berkut Dictionary background service worker initialized (Cerebras Edition)");
chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, { type: "TOGGLE_POPUP" }).catch(() => {
    });
  }
});
