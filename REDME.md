# 🦅 Berkut Dictionary

Berkut Dictionary is a premium bilingual dictionary and translation extension built for speed, clarity, and a refined visual experience. It combines instant word lookup, context-aware translation, offline-first phrasebook and history features, and high-quality pronunciation tools for English, Persian, and Russian.

Designed with a modern glassmorphism interface, subtle neon accents, and strong RTL support, Berkut is made for language learners, translators, and professionals who want both functionality and elegance in one tool.

## Features

### Smart Text Lookup

Select a word or highlight a passage on any webpage to open the Berkut panel instantly. The interface is clean, readable, and designed to fit naturally into the page without disrupting your workflow.

### Multi-Engine Pronunciation

Berkut supports high-quality text-to-speech playback with multiple voice engines for English, Persian, and Russian. It is built to deliver natural pronunciation and fast response times, with support for additional languages planned in future updates.

### AI-Powered Translation and Context

Berkut uses AI-powered features to provide more accurate and meaningful translations, including:

* contextual word meanings
* usage examples
* paragraph summaries
* key concepts extraction
* intelligent explanations

To enable AI-powered features, you need to provide a **Cerebras API Key** in the extension settings. The API key is stored locally in your browser and is only used to communicate with the AI service.

### API Configuration

Berkut supports AI features through the Cerebras API.

To activate AI-powered translation and analysis:

1. Create a Cerebras API key from the Cerebras platform.
2. Open **Berkut Settings**.
3. Navigate to the **AI Configuration** section.
4. Enter your API key.
5. Save the settings and start using AI features.

Without an API key, Berkut's dictionary, phrasebook, history, and offline features continue to work normally, but AI-powered translation and analysis will be unavailable.

### Refined Visual Design

The interface includes:

* ambient neon border effects
* glassmorphism transparency
* dark and light themes
* premium RTL formatting
* built-in Vazirmatn font for Persian text

Everything is designed to feel polished, responsive, and easy on the eyes.

### Local Phrasebook and Search History

Save important words and phrases to your private phrasebook and access your search history anytime. These features are offline-first and stored locally for convenience and privacy.

### Custom Keyboard Shortcuts

Berkut includes fully customizable keyboard shortcuts for faster access to core actions, including:

* opening search
* toggling the popup
* playing audio
* saving to phrasebook
* copying definitions
* switching themes

## Installation

Berkut works with Chromium-based browsers, including Google Chrome, Microsoft Edge, Brave, Opera, and Vivaldi.

### Setup Steps

1. Download or clone the repository and extract the files.
2. Open your browser’s extensions page:

   * Microsoft Edge: `edge://extensions`
   * Google Chrome: `chrome://extensions`
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the `extension` folder from the project.
6. The **Berkut Dictionary** icon will appear in your browser toolbar. Pin it for quick access.

## How It Works

### Popup Mode

Click the extension icon to open the main dictionary interface. From there, you can search words, manage settings, configure API keys, and switch modes quickly.

### In-Page Overlay

When you highlight text on a webpage, Berkut shows floating action buttons that open an interactive card directly on the page. This keeps you focused and avoids unnecessary context switching.

### Shadow DOM Protection

The on-page card is rendered inside a protected Shadow Root, which helps isolate the extension UI from page styles and prevents CSS conflicts.

## Tech Stack

* **Framework:** React 18
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Storage:** Chromium Extension Storage API
* **Fonts:** Vazirmatn, Inter

## License

This project is open source and released under the MIT License.

---

Built for people who care about language, design, and speed.
