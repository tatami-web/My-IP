# Instalation

<div align="center">
  <img src="./assets/icon.png" style="width: 200px; height: 200px;">
  <h1>My IP</h1>
</div>

# Project My IP

Welcome to the project! See the following documentation for more details:

- [ Documentation](DOCUMENTATION.md)

- [Usage Guide](README.md)

# Capacitor Application Setup Guide

This README provides a detailed guide to building and verifying the Capacitor-based mobile application intended for F-Droid. All essential files are included in this repository except for the `node_modules` directory, which has been excluded to save space. This guide explains how to restore the `node_modules` directory, configure the project, and build the application.

## Repository Contents

The repository contains the following files and folders:

- **`android/`**: The Android platform folder required for building the app.
- **`capacitor.config.json`**: Configuration file for Capacitor.
- **`capacitor.config.js`**: Disables the splash screen during app launch.
- **`LICENSE.txt`**: License for the project.
- **`metadata/`**: Metadata files for F-Droid submission.
- **`package.json`**: Node.js project configuration file.
- **`package-lock.json`**: Dependency lock file for reproducible builds.
- **`www/`**: Compiled web assets for the app.

---

## Prerequisites

Ensure your Linux environment has the following installed:

1. **Node.js and npm**  
   Capacitor requires Node.js and npm. Install them with:
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

2. **Java Development Kit (JDK)**  
   Required for Android builds. Install OpenJDK:
   ```bash
   sudo apt install openjdk-11-jdk
   ```

3. **Android Studio**  
   Download and install [Android Studio](https://developer.android.com/studio). Configure the SDK and tools required for Android development.

---

## Restoring the `node_modules` Directory

The `node_modules` directory has been removed from the repository to save space. Follow these steps to restore it:

1. Navigate to the root directory of the project.
2. Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

This command will regenerate the `node_modules` directory based on the `package.json` and `package-lock.json` files included in the repository.

---

## Building the Application

### 1. Sync Web Assets with the Android Project
Ensure your web assets are correctly synced with the Android platform:
```bash
npx cap sync
```

### Reproducible Builds
To verify the build:

1. Follow the steps in the **Building the Application** section.
2. Compile the application in Android Studio or via command line:
   ```bash
   ./gradlew assembleRelease
   ```

## Resources
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Studio](https://developer.android.com/studio)
- [Node.js](https://nodejs.org)
