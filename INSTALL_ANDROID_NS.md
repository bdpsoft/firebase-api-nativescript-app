# Install Android Studio and NativeScript (Windows) — Step-by-step

This guide walks through installing Android Studio, Android SDK components, Java JDK (via Android Studio JBR), and the NativeScript CLI on Windows. It includes PowerShell commands to set environment variables and verify the installation.

## 1. Prerequisites

- Windows 10/11
- Administrative access to install software
- Internet connection

## 2. Install Android Studio

1. Download Android Studio from: https://developer.android.com/studio
2. Run the installer and follow the default options.
   - Make sure to install:
     - Android SDK
     - Android SDK Platform-Tools
     - Android SDK Build-Tools
     - Android Virtual Device
3. Open Android Studio after installation.
4. Go to `Configure` → `SDK Manager` → `Android SDK` and install at least one SDK Platform (recommended: API Level 33 or 34).
5. In `SDK Tools`, ensure the following are installed:
   - Android SDK Build-Tools
   - Android SDK Platform-Tools
   - Android Emulator
   - Android SDK Command-line Tools (latest)

Note the "Android SDK Location" shown at the top (for example: `C:\Users\<username>\AppData\Local\Android\Sdk`). You'll need this for environment variables.

## 3. Java JDK (via Android Studio JBR)

Android Studio includes a bundled JBR (JetBrains Runtime) which works for most setups. The default path is usually:

```
C:\Program Files\Android\Android Studio\jbr
```

If you prefer to install a separate JDK (e.g., OpenJDK or Oracle JDK), install it and note the installation path (e.g., `C:\Program Files\Java\jdk-XX`).

## 4. Install NativeScript CLI

Open a new PowerShell window as Administrator and run:

```powershell
npm install -g nativescript
```

Verify installation:

```powershell
ns --version
```

Expected: prints the NativeScript CLI version (e.g., `8.x.x`).

## 5. Set Environment Variables (PowerShell)

Replace `<username>` with your Windows username if needed. Run these commands in PowerShell (run as normal user):

```powershell
# Set Android SDK location
[Environment]::SetEnvironmentVariable('ANDROID_HOME', 'C:\Users\<username>\AppData\Local\Android\Sdk', 'User')

# Set Java Home (Android Studio JBR)
[Environment]::SetEnvironmentVariable('JAVA_HOME', 'C:\Program Files\Android\Android Studio\jbr', 'User')

# Add platform-tools to PATH
$oldPath = [Environment]::GetEnvironmentVariable('Path', 'User')
$newPath = $oldPath + ';' + 'C:\Users\<username>\AppData\Local\Android\Sdk\platform-tools'
[Environment]::SetEnvironmentVariable('Path', $newPath, 'User')
```

After running the commands, close all PowerShell windows and open a new one to pick up the changes.

## 6. Verify Environment

Open a new PowerShell window and run:

```powershell
echo $env:ANDROID_HOME
echo $env:JAVA_HOME
ns doctor
```

`ns doctor` should report no critical issues and list Android SDK/JDK as configured.

## 7. Create a NativeScript project (optional)

In your project folder run:

```powershell
ns create my-mobile-app --template @nativescript/template-blank-ts
cd my-mobile-app
ns run android
```

Note: `ns run android` requires an emulator or a connected Android device.

## 8. Troubleshooting

- If `echo $env:ANDROID_HOME` prints nothing:
  - Re-open PowerShell or restart your computer.
  - Check user environment variables via Windows Settings → Environment Variables.

- If `ns doctor` still reports missing SDK components:
  - Open Android Studio → SDK Manager and make sure `Android SDK Platform` and `Android SDK Build-Tools` are installed.
  - Ensure `%ANDROID_HOME%\platform-tools` is in your PATH.
  - Ensure `JAVA_HOME` points to a valid JDK.

- If you face permission issues with `npm install -g` on Windows, run PowerShell as Administrator.

## 9. Notes

- For iOS builds, you must use macOS and Xcode.
- Consider enabling Intel HAXM or Windows Hypervisor Platform for faster emulation.

---

If you'd like, I can:
- Set the exact environment variables for you (you already provided your Android SDK path)
- Create a sample NativeScript project inside this repo and run it
- Add emulator setup steps (AVD creation) to this document

Which option should I do next?