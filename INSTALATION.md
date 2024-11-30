# Installation

<div align="center">
<img src="./assets/icon.png" style="width: 200px; height: 200px;">
<h1>My IP</h1>
</div>

# Project

Welcome to the project! Please refer to the following documentation for more details:

- [ Documentation](DOCUMENTATION.md)

- [ Usage Guide](README.md)

# Capacitor App Setup Guide

This README provides a detailed guide to building and verifying the Capacitor-based mobile app. All essential files are included in this repository except the `node_modules` directory, which has been excluded to save space. This guide explains how to restore the `node_modules` directory, configure the project, and build the app.

## Repository Contents

The repository contains the following files and folders:

- **`android/`**: The Android platform folder needed to compile the app.
- **`capacitor.config.json`**: Configuration file for Capacitor.
- **`capacitor.config.js`**: Disables the splash screen during app launch.
- **`LICENSE.txt`**: License for the project.
- **`metadata/`**: Metadata files for F-Droid submission.
- **`package.json`**: Configuration file for the Node.js project.
- **`package-lock.json`**: Dependency lock file for reproducible builds.
- **`www/`**: Compiled web resources for the app.

---

## Prerequisites

Make sure your Linux environment has the following installed:

1. **Node.js and npm**
Capacitor requires Node.js and npm. Install them with:

```bash
sudo apt update
sudo apt install nodejs npm
```

2. **Java Development Kit (JDK)**
Required for Android builds. Installs OpenJDK:

```bash
sudo apt install openjdk-11-jdk
```
---

## Restoring the `node_modules` directory

The `node_modules` directory has been removed from the repository to save space. Follow these steps to restore it:

1. Navigate to the root directory of the project.
2. Run the following command to install the required dependencies:

```bash
npm install
```

This command will regenerate the `node_modules` directory based on the `package.json` and `package-lock.json` files included in the repository.

---

## Building the app

### 1. Sync web assets with the Android project
Make sure your web assets are properly synchronized with the Android platform:

```bash
npx cap sync
```

### Reproducible builds
To verify the build:

1. Follow the steps in the **Building the app** section.

```bash
./gradlew assemblyRelease
```

## Resources
- [Capacitor Documentation](https://capacitorjs.com/docs)

- [Android Studio](https://developer.android.com/studio)

- [Node.js](https://nodejs.org)