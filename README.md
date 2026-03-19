# 🔖 Bookmark Sync Offline 

A lightweight browser extension for transferring bookmarks between Chromium-based browsers and Firefox on Android — export from one, import into another, with local storage as the bridge.

![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)
![Version](https://img.shields.io/badge/version-3.5.0-green.svg)
![JavaScript](https://img.shields.io/badge/javascript-ES6+-yellow.svg)

## 🎯 Purpose

> **This extension is designed to transfer bookmarks between:**
> - 🟠 **Chromium-based Android browsers that support extensions** (e.g. Cromite, Kiwi)
> - 🦊 **Firefox for Android — including its forks that support browser extensions**
>
> 💡 **Why Firefox for Android?** Firefox for Android and its forks do not have a built-in bookmark export feature. This extension fills that gap — letting you export your bookmarks as JSON or HTML directly from the browser.

---

## 📱 Screenshot

<img src="https://raw.githubusercontent.com/Sumon-Kayal/Bookmark-Sync-Offline/87429c477d9412c3df9a239ba2fd354190d327be/Screenshot_2026-03-07-16-11-27-843_org.cromite.cromite.jpg" width="320" alt="Bookmark Sync popup running on Android in Cromite, showing staged bookmarks with Pull from Browser, Push to Browser, Import File, Export JSON, Export HTML and Clear Staging Area buttons">

## ✨ Features

- 🔄 **Cross-Browser Transfer** - Move bookmarks between Chromium browsers and Firefox (including Android forks)
- 📡 **Change Detection** - Background listener detects bookmark changes and notifies the popup in real time
- 📊 **Staging Area** - Review and manage bookmarks before pushing them to the browser
- 🎯 **Lightweight** - Minimal resource usage with fast performance
- 🔒 **Privacy Focused** - All data stored locally, no server or account required
- 🎨 **Modern UI** - Clean and user-friendly interface

## 🚀 Installation

### From Source (Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sumon-Kayal/Bookmark-Sync-Offline.git
   cd Bookmark-Sync-Offline
   ```

2. **Load in Chrome/Edge**
   - Open `chrome://extensions/` (or `edge://extensions/`)
   - Enable "Developer mode" (toggle in top-right corner)
   - Click "Load unpacked"
   - Select the `Bookmark-Sync-Offline` folder

3. **Load in Firefox**
   - Open `about:debugging#/runtime/this-firefox`
   - Click "Load Temporary Add-on"
   - Select any file from the `Bookmark-Sync-Offline` folder (e.g., `manifest.json`)

## 📖 Usage

### Basic Operations

1. **Initial Sync**
   - Click the extension icon in your browser toolbar
   - Click **"Pull from Browser"** to save all your bookmarks to the staging area
   - The count display will update to show how many bookmarks were staged

2. **Import Bookmarks**
   - Click **"Import File"** to open the import page, then use the file picker to load bookmarks from a JSON or HTML file
   - Once imported, click **"Push to Browser"** to add them to your browser

3. **Automatic Sync**
   - The extension automatically syncs when you:
     - Add new bookmarks
     - Delete bookmarks
     - Move bookmarks between folders
     - Rename bookmarks or folders

### Features Overview

- **Popup Interface**: Quick access to pull, push, export, and import bookmarks
- **Import File Page**: Full-page interface for importing bookmarks from JSON or HTML files
- **Change Detection**: Background listener that detects bookmark changes and notifies the popup
- **Storage Statistics**: View how many bookmarks are staged

## 🛠️ Development Setup

### Prerequisites

- Modern web browser (Chrome 92+, Firefox 140+, or Edge 92+)
- Basic knowledge of JavaScript and browser extensions
- Text editor or IDE (VS Code recommended)

### Project Structure

```
Bookmark-Sync-Offline/
├── manifest.json          # Extension manifest
├── background.js          # Background service worker
├── popup.html            # Extension popup interface
├── popup.js              # Popup functionality
├── manager.html          # Bookmark import page
├── styles.css            # Shared styles
├── README.md             # This file
├── CHANGELOG.md          # Version history
├── SETUP.md              # Setup and icon documentation
├── LICENSE               # GPL-3.0 License
└── .gitignore           # Git ignore rules
```

### Key Files

- **manifest.json** - Defines extension properties, permissions, and scripts
- **background.js** - Handles bookmark events and synchronization logic
- **popup.js** - Controls the popup interface and user interactions
- **manager.html** - Full-page bookmark import interface (file picker and drag-and-drop)

### Development Workflow

1. **Make Changes**
   ```bash
   # Edit files in your preferred editor
   code .
   ```

2. **Reload Extension**
   - Chrome/Edge: Go to `chrome://extensions/` and click the reload icon
   - Firefox: Click "Reload" on `about:debugging`

3. **Test Features**
   - Test bookmark creation, deletion, and modification
   - Verify sync functionality
   - Check manager interface
   - Test error handling

4. **Debug**
   - Right-click extension icon → "Inspect popup" (for popup debugging)
   - Go to `chrome://extensions/` → "Inspect views: service worker" (for background script)
   - Check browser console for errors

## 🧪 Testing

### Manual Testing Checklist

- [ ] Extension installs without errors
- [ ] Popup opens and displays correctly
- [ ] Initial sync saves all bookmarks
- [ ] New bookmarks are automatically detected
- [ ] Bookmark manager opens correctly via Import File button
- [ ] JSON and HTML import works correctly
- [ ] Export JSON and Export HTML produce valid files
- [ ] Push to Browser adds bookmarks without duplicates
- [ ] Clear Staging Area wipes only extension storage
- [ ] Extension icon displays properly

### Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 92+ | ✅ Supported |
| Edge | 92+ | ✅ Supported |
| Other Chromium-based Android browsers with extension support | 142+ | ✅ Supported |
| Firefox & its Android forks | 140+ | ❌ Currently Not working |
| Safari | - | ❌ Not tested |
| Opera | 74+ | ⚠️ Desktop only (no extension support on Android) |

## 📝 API Reference

### Storage Structure

```javascript
// Bookmarks are stored in chrome.storage.local
{
  "bookmarks_data": {
    "data": [
      {
        "title": "Example Site",
        "url": "https://example.com",
        "dateAdded": 1234567890000
      }
    ],
    "savedAt": 1234567890000,
    "count": 1
  }
}
```

### Key Functions

**background.js**
- `initializeExtension()` — Sets default metadata on first install
- `setupAlarms()` — Creates the 24h maintenance alarm (clears first to avoid duplicates)
- `performMaintenance()` — Runs periodic storage housekeeping
- `debounceNotifyPopup(message)` — Alarm-based debounce for bookmark change notifications

**popup.js**
- `handlePull()` — Reads the full bookmark tree and saves to local storage
- `handlePush()` — Pushes staged bookmarks into the browser's bookmark bar
- `handleExportJson()` / `handleExportHtml()` — Exports stored bookmarks to file
- `handleImportFileData(file)` — Imports bookmarks from a JSON or HTML file
- `findOrCreateFolder(title)` — Finds or creates a folder on the bookmarks bar

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style
- Add comments for complex logic
- Test thoroughly before submitting
- Update documentation as needed
- Keep commits focused and descriptive

## 🐛 Known Issues

- None currently reported

## 📋 Roadmap

- [ ] Search functionality in manager
- [ ] Cloud sync integration
- [ ] Tag system for bookmarks
- [x] Keyboard shortcuts
- [ ] Dark mode support
- [ ] Bookmark statistics and analytics
- [x] Duplicate detection
- [ ] Backup scheduling

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sumon Kayal**

- GitHub: [@Sumon-Kayal](https://github.com/Sumon-Kayal)

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by the need for better bookmark management
- Built with modern web extension APIs

## 📞 Support

If you encounter any issues or have questions:

- Open an [Issue](https://github.com/Sumon-Kayal/Bookmark-Sync-Offline/issues)
- Check existing issues for solutions
- Star the repository if you find it useful!

## 🔗 Links

- [Chrome Web Store](#) (Coming soon)
- [Firefox Add-ons](#) (Coming soon)
- [Documentation](https://github.com/Sumon-Kayal/Bookmark-Sync-Offline/wiki) (Coming soon)

## 📋 [Changelog](https://github.com/Sumon-Kayal/Bookmark-Sync-Offline/blob/main/CHANGELOG.md)
---

Made with ❤️ by [Sumon Kayal](https://github.com/Sumon-Kayal)
