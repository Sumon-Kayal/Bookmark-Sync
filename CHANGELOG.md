# Changelog

All notable changes to Bookmark Sync Offline are documented here.

---

## [3.6.0] - 2026-03-19

### Changed
- **Raised minimum Chromium base to 140+** — `minimum_chrome_version` updated from `121` to `140` in `manifest.json`. This aligns with the minimum version of Chromium-based Android browsers (Cromite, Kiwi, etc.) confirmed to support the extension.
- **Raised Firefox `strict_min_version` to `140.0`** — updated in `manifest.json` to match the minimum Firefox version in scope. Note: Firefox and its Android forks are currently not working with this extension.
- **README: browser compatibility table** — Chrome, Edge, and Other Chromium-based Android rows updated from earlier baselines to `140+`. Firefox row version confirmed at `140+`.
- **README: prerequisites** — development browser requirement updated to Chrome 140+ / Edge 140+ / Firefox 140+.

---

## [3.5.0] - 2026-03-19

### Fixed
- **Accessibility: file input keyboard access** — replaced `display: none` on `input[type="file"]` with a visually-hidden pattern (`position: absolute; width/height: 1px; clip: rect(0,0,0,0)`). The input now stays in the accessibility tree, allowing keyboard users to Tab to it and trigger the file dialog. Also restores the previously dead `.file-input-wrapper:focus-within` focus ring.
- **Accessibility: silent `aria-live` region** — removed `display: none` from `.status`. The element is now always present in the accessibility tree at page load (collapsed via `max-height: 0`), so screen readers correctly announce status updates when `.show` is applied.
- **Browser shortcut collision** — changed `_execute_action` suggested key from `Ctrl+Shift+B` (reserved by Chrome for Bookmarks Bar toggle) to `Ctrl+Shift+Y` / `Command+Shift+Y` on Mac.
- **Version compatibility: Chrome** — raised `minimum_chrome_version` from `88` to `92`. ES module service workers (`"type": "module"`) require Chrome 92+; Chrome 88–91 would fail to parse the background script.
- **Version compatibility: Firefox** — added `"scripts": ["background.js"]` fallback alongside `service_worker` for Firefox 109–120, which did not support the `service_worker` key until Firefox 121. Note: Firefox and its Android forks are currently not working with this extension despite the fallback.

---

## [3.0.0] - 2026-03-07 (Previous)

### Fixed
- Wrap file import in `try-finally` for proper cleanup (`8ca470c`)
- Improve import bookmarks instructions in README (`9fdf879`)
- Update SETUP.md with icon size documentation (`0cc5101`)

### Removed
- Deleted `COPYING` file (replaced by LICENSE) (`db05e5a`)
- Deleted `CREATE_ICONS.md` (`faa1876`)
- Deleted `DEPLOYMENT_COMPLETE.md` (`511c357`)
- Cleaned up stray `.gitignore` entries (`86e1498`)

---

## [2.1.0] - 2026-03-07

### Changed
- Multiple iterative file updates via PRs #20–#25
- Reverted a bad upload from PR #15 via PR #19 (`b76168e`)

### Fixed
- Removed `icons/Sample.txt` placeholder — added in `5df1a66`, then deleted in `6cdb803`

---

## [2.0.0] - 2026-01-22

### Added
- CodeRabbit auto-generated docstrings pass (`61de498`)
- Initial MV3 extension files uploaded (`37a7e09`)

### Changed
- `popup.js` updated (`35f9b08`)
- `manager.html` updated (`f42c6a3`)
- `styles.css` updated (`9860286`)
- README formatting and content improvements (`695817e`, `15c2307`, `52b071c`, `b367e0d`, `f3f72f3`, `5501f41`)
- `DEPLOYMENT_COMPLETE.md` updated (`f922fbd`)

### Removed
- Deleted original `LICENSE` (later re-added as MIT) (`640d856`)
- Deleted original `.gitignore` (`0843f3e`)

---

## [1.0.0] - 2026-01-16

### Added
- Initial commit — base extension scaffolding (`8fe9581`)
