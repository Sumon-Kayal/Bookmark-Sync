# 🚀 Bookmark Sync - Complete Setup Guide

This guide will help you set up the development environment, understand the project structure, and start contributing to Bookmark Sync.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Development Environment](#development-environment)
4. [Project Structure](#project-structure)
5. [Configuration](#configuration)
6. [Development Workflow](#development-workflow)
7. [Testing](#testing)
8. [Building for Production](#building-for-production)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Software

1. **Web Browser**
   - Any Chromium-based browser with extension support

2. **Code Editor** (Choose one)
   - VS Code (recommended) - [Download](https://code.visualstudio.com/)
   - Sublime Text
   - WebStorm

3. **Git**
   - [Download Git](https://git-scm.com/downloads)
   - Basic Git knowledge recommended

### Optional Tools

- **Node.js & npm** (for future build tools)
  - [Download Node.js](https://nodejs.org/) (LTS version recommended)
  
- **Extension Development Tools**
  - Chrome DevTools
  - React Developer Tools (if you add React later)

## Initial Setup

### 1. Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/Sumon-Kayal/Bookmark-Sync.git

# Using SSH (if configured)
git clone git@github.com:Sumon-Kayal/Bookmark-Sync.git

# Navigate to project directory
cd Bookmark-Sync
```

### 2. Verify Files

Ensure all required files are present:

```bash
ls -la
```

You should see:
- `manifest.json`
- `background.js`
- `popup.html`
- `popup.js`
- `manager.html`
- `styles.css`
- `icons/` (containing icon16.png, icon32.png, icon48.png, icon128.png)
- `LICENSE`
- `README.md`
- `.gitignore`

### 3. Create Missing Directories (if needed)

```bash
# Create icons directory
mkdir -p icons
```

## Development Environment

### VS Code Setup (Recommended)

1. **Install VS Code Extensions**
   - ESLint
   - Prettier - Code formatter
   - JavaScript (ES6) code snippets
   - Live Server
   - GitLens

2. **Create VS Code Workspace Settings**

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "files.eol": "\n",
  "javascript.preferences.quoteStyle": "single",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

3. **Create VS Code Extensions Recommendations**

Create `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "xabikos.javascriptsnippets",
    "eamodio.gitlens"
  ]
}
```

### Browser Setup

#### Chromium Android Setup (Cromite, Ultimatum)

1. Open `chrome://extensions/` in your browser

2. Enable **"Developer mode"** (toggle in top-right)

3. Tap **"Load unpacked"**

4. Select your `Bookmark-Sync` folder

5. Extension should now appear in your toolbar

## Project Structure

### Current Structure

```
Bookmark-Sync/
│
├── manifest.json          # Extension configuration
├── background.js          # Background service worker
├── popup.html            # Popup UI
├── popup.js              # Popup logic
├── manager.html          # Manager UI
├── styles.css            # Styles
├── LICENSE               # GPL-3.0 License
├── README.md             # Documentation
└── .gitignore           # Git ignore file
```

### Recommended Structure (Future Enhancement)

```
Bookmark-Sync/
│
├── src/
│   ├── background/
│   │   └── background.js
│   ├── popup/
│   │   ├── popup.html
│   │   ├── popup.js
│   │   └── popup.css
│   ├── manager/
│   │   ├── manager.html
│   │   ├── manager.js
│   │   └── manager.css
│   ├── common/
│   │   ├── utils.js
│   │   └── storage.js
│   └── styles/
│       └── global.css
│
├── assets/
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon32.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   └── images/
│
├── docs/
│   ├── API.md
│   └── CONTRIBUTING.md
│
├── tests/
│   └── (test files)
│
├── manifest.json
├── README.md
├── SETUP.md
├── LICENSE
├── .gitignore
└── package.json
```

## Configuration

### Manifest.json Overview

Key sections to understand:

```json
{
  "manifest_version": 3,
  "name": "Bookmark Sync",
  "version": "3.0.0",
  
  "permissions": [
    "bookmarks",  // Read/write bookmarks
    "storage",    // Use chrome.storage API
    "alarms",     // Periodic maintenance & debounce
    "tabs"        // Open manager in new tab
  ],
  
  "background": {
    "service_worker": "background.js",
    "type": "module"    // MV3: enables ES module syntax
  },
  
  "action": {
    "default_popup": "popup.html"
  }
}
```

### Adding Icons

Create or download icons in these sizes:
- 16x16 (toolbar icon)
- 32x32 (browser action icon)
- 48x48 (extension management page)
- 128x128 (extension management page)

Update `manifest.json`:

```json
"icons": {
  "16": "icons/icon16.png",
  "32": "icons/icon32.png",
  "48": "icons/icon48.png",
  "128": "icons/icon128.png"
}
```

## Development Workflow

### 1. Daily Development Cycle

```bash
# Pull latest changes
git pull origin main

# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes
# ... edit files ...

# Test in browser
# (reload extension in browser)

# Commit changes
git add .
git commit -m "Description of changes"

# Push to your fork
git push origin feature/your-feature-name
```

### 2. Hot Reload Setup

Since browser extensions don't have hot reload by default:

1. Make code changes
2. Go to `chrome://extensions/`
3. Click the reload icon on your extension
4. Test the changes

**Pro tip**: Keep the extensions page open in a pinned tab for quick reloading.

### 3. Debugging

#### Popup Debugging
1. Right-click extension icon
2. Select "Inspect popup"
3. DevTools opens for popup context

#### Background Script Debugging
1. Go to `chrome://extensions/`
2. Find your extension
3. Click "Inspect views: service worker"
4. DevTools opens for background context

#### Console Logging
```javascript
// Add debug logs
console.log('[BookmarkSync] Syncing bookmarks...');
console.error('[BookmarkSync] Error:', error);
```

## Testing

### Manual Testing Checklist

Create a file `tests/manual-test-checklist.md`:

```markdown
# Manual Testing Checklist

## Installation
- [ ] Extension installs without errors
- [ ] Icon appears in toolbar
- [ ] No console errors on install

## Basic Functionality
- [ ] Popup opens when clicking icon
- [ ] Sync button works
- [ ] Manager opens correctly

## Bookmark Operations
- [ ] Create new bookmark → syncs automatically
- [ ] Delete bookmark → removed from storage
- [ ] Edit bookmark → updates in storage
- [ ] Move bookmark → folder structure maintained

## Storage
- [ ] Data persists after browser restart
- [ ] Storage doesn't exceed limits
- [ ] Old data is cleaned up properly

## UI/UX
- [ ] All buttons are clickable
- [ ] Loading states shown appropriately
- [ ] Error messages are clear
- [ ] Responsive design works
```

### Automated Testing (Future)

To add unit tests later:

```bash
# Initialize npm project
npm init -y

# Install testing frameworks
npm install --save-dev jest @testing-library/dom

# Create test file
touch tests/bookmark.test.js
```

## Building for Production

### Current Build Process

Since this is a simple extension, no build step is currently needed. To prepare for distribution:

1. **Clean up code**
   - Remove console.logs (or use conditional logging)
   - Remove debug code
   - Optimize performance

2. **Update version**
   ```json
   // In manifest.json
   "version": "3.0.0"
   ```

3. **Test thoroughly**
   - Run through manual test checklist
   - Test on multiple browsers
   - Test edge cases

4. **Create release package**
   ```bash
   # Create a zip file (exclude unnecessary files)
   zip -r bookmark-sync-v3.0.0.zip . \
     -x "*.git*" \
     -x "node_modules/*" \
     -x "tests/*" \
     -x "docs/*"
   ```

### Future Build System

Add a build step with webpack/rollup:

```bash
npm install --save-dev webpack webpack-cli
```

Create `webpack.config.js` for bundling and minification.

## Deployment

### Sideloading on Android (Cromite / Kiwi Browser)

1. **Package the extension**

2. **Transfer to device**
   - Copy the `.zip` file to your Android device (via USB, cloud storage, or direct download)

3. **Load in Cromite**
   - Open `chrome://extensions/`
   - Enable **Developer mode**
   - Tap **Load unpacked** and select the extracted extension folder

4. **Load in Ultimatum Browser**
   - Open `chrome://extensions/`
   - Enable **Developer mode**
   - Tap **+ (from .zip/.crx/.user.js)** and select the zip file directly

## Troubleshooting

### Common Issues

#### Extension Won't Load
```
Problem: "Manifest file is missing or unreadable"
Solution: Verify manifest.json syntax with a JSON validator
```

#### Background Script Errors
```
Problem: Background script not running
Solution: Check service worker in chrome://extensions/
        Look for errors in console
```

#### Storage Not Persisting
```
Problem: Data lost on browser restart
Solution: Verify you're using chrome.storage.local, not sessionStorage
```

#### Permissions Denied
```
Problem: Cannot access bookmarks API
Solution: Check manifest.json has "bookmarks" in permissions array
```

### Debug Mode

Add this to your code for enhanced debugging:

```javascript
const DEBUG = true; // Set to false for production

function debug(...args) {
  if (DEBUG) {
    console.log('[BookmarkSync]', ...args);
  }
}

// Usage
debug('Syncing bookmarks...', bookmarkCount);
```

## Additional Resources

### Documentation
- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/)
- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

### Communities
- [r/browserextensions](https://reddit.com/r/browserextensions)
- [Chrome Extension Google Group](https://groups.google.com/a/chromium.org/g/chromium-extensions)
- Stack Overflow [chrome-extension tag]

### Tools
- [Extension Manifest Validator](https://developer.chrome.com/docs/extensions/mv3/manifest/)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Extension Source Viewer](https://chrome.google.com/webstore/detail/chrome-extension-source-v/jifpbeccnghkjeaalbbjmodiffmgedin)

## Next Steps

1. ✅ Complete initial setup
2. 📖 Read through the codebase
3. 🐛 Fix any existing issues
4. ✨ Add new features from roadmap
5. 🧪 Write tests
6. 📦 Prepare for distribution

---

Happy coding! If you encounter any issues not covered here, please open an issue on GitHub.
