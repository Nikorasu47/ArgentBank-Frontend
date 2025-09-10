# Visual Studio Code Configuration

This directory contains Visual Studio Code workspace configuration files to enhance the development experience for the ArgentBank Frontend project.

## Files Overview

### `settings.json`
Workspace-specific settings that include:
- Auto-formatting on save and paste
- Consistent indentation (2 spaces)
- HTML/CSS validation
- Emmet support for faster coding
- Trailing whitespace removal

### `extensions.json`
Recommended extensions for optimal development experience:
- **Auto Rename Tag**: Automatically renames paired HTML tags
- **Live Server**: Launch a local development server with live reload
- **CSS Peek**: Peek and go-to-definition for CSS classes and IDs
- **Prettier**: Code formatter for consistent styling
- **HTML CSS Class Completion**: IntelliSense for CSS class names
- **Auto Close Tag**: Automatically adds HTML/XML close tags
- **Code Spell Checker**: Spell checking for code and comments

### `launch.json`
Debug configurations for:
- Launching the project in Chrome
- Launching the project in Firefox
- Opening index.html directly

### `tasks.json`
Custom tasks for:
- Starting a local HTTP server
- HTML validation
- Code formatting

## Getting Started

1. Open this project in Visual Studio Code
2. Install the recommended extensions when prompted
3. Use `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) and run "Tasks: Run Task" to start the local server
4. Open http://localhost:8000 in your browser to view the site

## Development Workflow

- Files will auto-format when saved
- Use the Live Server extension for real-time preview
- Use the debug configurations to test in different browsers
- The spell checker will help catch typos in content