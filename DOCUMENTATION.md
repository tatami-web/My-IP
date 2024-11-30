<div align="center">
  <img src="./assets/icon.png" style="width: 200px; height: 200px;">
  <h1>My IP</h1>
</div>

# Capacitor Application Setup Guide

This guide explains how to set up and build a hybrid mobile application using Capacitor. It covers the installation of necessary dependencies, project creation, and steps to compile and test your application. This guide is designed for Linux environments.

## Prerequisites

Before getting started, ensure your system meets the following requirements:

1. **Node.js**  
   Capacitor requires Node.js. Install it using your Linux package manager:
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

2. **Java Development Kit (JDK)**  
   Required for Android development. Install OpenJDK:
   ```bash
   sudo apt install openjdk-11-jdk
   ```

3. **Android Studio**  
   Download and install [Android Studio](https://developer.android.com/studio). Configure the SDK tools to compile and test Android applications.

## Step-by-Step Setup

### 1. Create a Base Web Project
Start by creating a basic web application using HTML, CSS, and JavaScript.

1. Create a project folder and navigate to it:
   ```bash
   mkdir myApp
   cd myApp
   ```

2. Initialize a Node.js project:
   ```bash
   npm init -y
   ```

3. Create the necessary files:
   ```bash
   touch index.html script.js style.css
   ```

4. Add basic content to your HTML, JavaScript, and CSS files.

---

### 2. Install and Initialize Capacitor

1. Install Capacitor dependencies:
   ```bash
   npm install @capacitor/core @capacitor/cli
   ```

2. Initialize Capacitor in your project:
   ```bash
   npx cap init
   ```
   - Provide a name for your app and a unique package ID (e.g., `com.example.myapp`).

---

### 3. Configure Capacitor

1. Open `capacitor.config.json` and ensure the `webDir` property points to the folder containing your `index.html` (default: `www`):
   ```json
   {
     "appId": "com.example.myapp",
     "appName": "My Capacitor App",
     "webDir": "./",
     "bundledWebRuntime": false
   }
   ```

2. If the `www` folder does not exist, create it:
   ```bash
   mkdir www
   touch www/index.html
   ```
   Add your compiled web assets to this directory.

---

### 4. Add Android Platform

1. Install the Android platform package:
   ```bash
   npm install @capacitor/android
   ```

2. Add Android as a platform to your project:
   ```bash
   npx cap add android
   ```

---

### 5. Sync and Build

1. Sync your web files with Capacitor:
   ```bash
   npx cap sync
   ```

2. Open the Android project in Android Studio:
   ```bash
   npx cap open android
   ```

3. Use Android Studio to compile and run the application on an emulator or a physical device.

---

### 6. Install and Use Native Plugins (Optional)

Capacitor offers plugins for accessing native device features like the camera or GPS.

1. Install the desired plugin, e.g., Camera:
   ```bash
   npm install @capacitor/camera
   npx cap sync
   ```

2. Use the plugin in your JavaScript code:
   ```javascript
   import { Camera } from '@capacitor/camera';

   async function takePicture() {
       const image = await Camera.getPhoto({
           quality: 90,
           allowEditing: false,
           resultType: CameraResultType.Uri
       });
       console.log(image);
   }
   ```

---

### 7. Customize App Icons and Splash Screens

1. Install the `@capacitor/assets` package:
   ```bash
   npm install @capacitor/assets --save-dev
   ```

2. Provide source images in the following structure:
   ```
   assets/
   ├── icon-only.png
   ├── icon-foreground.png
   ├── icon-background.png
   ├── splash.png
   └── splash-dark.png
   ```

3. Generate assets:
   ```bash
   npx capacitor-assets generate
   ```

---

### 8. Building a Release APK for Android

1. Navigate to the Android project directory:
   ```bash
   cd android
   ```

2. Build the release APK:
   ```bash
   ./gradlew assembleRelease
   ```
   - The APK will be located at `android/app/build/outputs/apk/release/app-release-unsigned.apk`.

3. Sign the APK:
   ```bash
   keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key
   apksigner sign --ks my-release-key.jks --out app-release-signed.apk app-release-unsigned.apk
   ```

---

## Common Issues and Solutions

### Updating Node.js
If you encounter issues with Node.js, update it using one of the following methods:

1. Using `apt`:
   ```bash
   sudo apt update
   sudo apt install nodejs
   ```

2. Using `nvm` (Node Version Manager):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
   nvm install node
   ```

3. From the [Node.js official website](https://nodejs.org).

---

### Resources
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Studio](https://developer.android.com/studio)
- [Node.js](https://nodejs.org)

---

This guide aims to simplify the setup process for hybrid mobile applications using Capacitor on Linux. If you encounter issues or have additional questions, consult the official documentation or submit an issue on this repository.