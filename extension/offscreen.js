true              &&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

let audio = null;
const speech = window.speechSynthesis;
let stopTtsTimestamp = 0;
if (typeof chrome !== "undefined" && chrome.runtime?.onMessage) {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    handleMessage(request, sender, sendResponse);
    return true;
  });
}
async function handleMessage(request, sender, sendResponse) {
  try {
    if (request.type === "playAudioOffscreen") {
      await playAudio(request.data);
      sendResponse({ windowPostMessageProxy: request.windowPostMessageProxy });
    } else if (request.type === "playSpeechTTSOffscreen") {
      await playSpeechTTS(request.data);
      sendResponse({ windowPostMessageProxy: request.windowPostMessageProxy });
    } else if (request.type === "stopTTSOffscreen") {
      await stopAudio(request.data);
      sendResponse({ windowPostMessageProxy: request.windowPostMessageProxy });
    }
  } catch (error) {
    console.error("Offscreen TTS Error:", error);
    sendResponse({ error: String(error) });
  }
}
function playAudio({ source, rate = 1, volume = 1, timestamp }) {
  return new Promise((resolve) => {
    try {
      audio = new Audio(source);
      audio.volume = volume;
      audio.playbackRate = rate;
      audio.onended = () => resolve();
      audio.onpause = () => resolve();
      audio.onerror = () => {
        console.error("Audio load error", audio?.error);
        resolve();
      };
      audio.onloadeddata = () => {
        if (Number(timestamp) < stopTtsTimestamp) {
          stopAudioHTML();
          resolve();
          return;
        }
        audio?.play().catch((e) => {
          console.error("Audio play error", e);
          resolve();
        });
      };
    } catch (error) {
      console.error(error);
      resolve();
    }
  });
}
let cachedVoices = [];
function getSpeechVoices() {
  return new Promise((resolve) => {
    if (cachedVoices.length > 0) {
      resolve(cachedVoices);
      return;
    }
    let attempts = 0;
    const maxAttempts = 5;
    const checkInterval = 100;
    const tryGetVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length !== 0) {
        cachedVoices = voices;
        resolve(voices);
        return;
      }
      attempts++;
      if (attempts < maxAttempts) {
        setTimeout(tryGetVoices, checkInterval);
      } else {
        const timeoutId = setTimeout(() => {
          console.warn("Voice loading timed out, resolving with available voices");
          const v = window.speechSynthesis.getVoices();
          cachedVoices = v;
          resolve(v);
        }, 2e3);
        window.speechSynthesis.addEventListener("voiceschanged", () => {
          clearTimeout(timeoutId);
          const v = window.speechSynthesis.getVoices();
          cachedVoices = v;
          resolve(v);
        }, { once: true });
      }
    };
    tryGetVoices();
  });
}
async function playSpeechTTS({ text, voice, lang, rate = 1, volume = 1 }) {
  return new Promise(async (resolve) => {
    const voices = await getSpeechVoices();
    let voiceSelected = voices.find((voiceData) => voiceData.name === voice);
    if (!voiceSelected) {
      voiceSelected = voices.find((voiceData) => voiceData.lang === lang || voiceData.lang.startsWith(lang));
    }
    if (!voiceSelected && voices.length > 0) {
      console.warn(`Voice not found: ${voice} or lang: ${lang}. Available voices:`, voices.map((v) => v.name));
      resolve();
      return;
    }
    if (!text || text.trim().length === 0) {
      console.warn("Empty text provided to SpeechSynthesis, skipping.");
      resolve();
      return;
    }
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    if (voiceSelected) msg.voice = voiceSelected;
    msg.lang = lang;
    msg.rate = rate;
    msg.volume = volume;
    msg.onend = () => resolve();
    msg.onerror = (e) => {
      if (e.error === "interrupted" || e.error === "canceled") {
        resolve();
        return;
      }
      console.error(`SpeechSynthesis error: ${e.error}`, {
        voice: voiceSelected?.name,
        lang,
        text: text.substring(0, 50),
        charIndex: e.charIndex,
        elapsedTime: e.elapsedTime
      });
      resolve();
    };
    speech.speak(msg);
  });
}
async function stopAudio({ timestamp }) {
  if (Number(timestamp) < stopTtsTimestamp) {
    return;
  }
  stopTtsTimestamp = Number(timestamp);
  stopAudioSpeech();
  await stopAudioHTML();
}
function stopAudioSpeech() {
  speech?.cancel();
}
function stopAudioHTML() {
  return new Promise((resolve) => {
    if (!audio) {
      resolve();
      return;
    }
    audio.pause();
    audio.currentTime = 0;
    resolve();
  });
}
