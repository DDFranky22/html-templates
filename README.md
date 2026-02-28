# MJML Email Template Studio

A local-first GUI for creating, editing, previewing and exporting HTML email templates using the [MJML](https://mjml.io/) framework. Built with Vue 3 + Node.js + Typescript.

## Why local-only?

This tool is intentionally designed to run **locally only** and should not be deployed to a public server.

Several of the underlying libraries may have high-severity vulnerabilities that make server-side exposure unsafe. Since the entire value of the tool can be achieved without a network - writing an HTML email, preview it and then export the resulting HTML - there is no real benefit in taking such a risk. Running it locally keeps your machine safe and your workflow simple.

## Overview

This repo is a monorepo containing two projects:

- **`backend`** - a Node.js/TypeScript application responsible for file I/O (saving, loading, template management) and MJML-to-HTML compilation.
- **`frontend`** - a Vue 3/TypeScript application providing the editor UI, built on [CodeMirror 5](https://codemirror.net/5/) with MJML tag autocomplete.

## Prerequisites

- Node.js 18 or higher (use of [nvm](https://github.com/nvm-sh/nvm) is recommended)

## Getting started

### 1. Clone repository and install

After cloning the repository run in the root folder of the project
```bash
npm install
```
This should install all the dependencies of the project.

### 2. Configure environment variables

Both projects require a `.env` file. Each contains a `.env.dist` file with all available keys and default values - copy and fill them in:

```bash
cp backend/.env.dist backend/.env
cp frontend/.env.dist frontend/.env
```

#### Backend `.env`

```env
# Directory where created files are saved
SAVED_FILE_PATH=../saved-files

# Temporary folder for downloadable file generation
TMP_FOLDER=../tmp

# Directory where templates are saved
TEMPLATE_FILE_PATH=../templates

# Port the application listens on
PORT=3000

# Email service configuration (e.g. gmail) — required for "Send test email"
MAILER_SERVICE=
MAILER_USER=
MAILER_PASSWORD=
MAILER_SENDER=
```

#### Frontend `.env`

```env
# URL of the backend application
VITE_API_ENDPOINT=http://localhost:3000
```

### 3. Run the application

From the root of the repository:

```bash
npm run dev
```

If everything is configured correctly, the application will be available at `http://localhost:{PORT}`.

## Features

### Toolbar actions

| Action | Description |
|---|---|
| **New file** | Create a new blank file |
| **New from template** | Create a new file pre-loaded with a saved template |
| **Load file** | Open a previously saved file |
| **Save** | Save the current file |
| **Save as template** | Save the current file as a reusable template |
| **Download HTML** | Compile and download the current file as a `.html` email |
| **Send test email** | Send the current template as a test email to a specified address |

### Editor shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+S` | Save the current file |
| `Ctrl+P` | Preview the email without saving |

### Preview

- The preview panel renders the compiled HTML output in real time.
- Toggle the **Sun/Moon** icon to switch the preview background between light and dark mode — useful for testing how your email renders in dark-mode email clients.

## Tech stack

- **Frontend**: Vue 3, TypeScript, CodeMirror 5
- **Backend**: Node.js, TypeScript, Express, MJML

