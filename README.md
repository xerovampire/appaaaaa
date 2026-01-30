# Gesture Scroll App

This React Native app uses OpenCV and an Accessibility Service to detect scroll gestures via the camera in the background.

## ⚠️ Prerequisites

This app requires **OpenCV for Android**.

1. **Automatic Integration**:
   The app is configured to try and fetch OpenCV from `com.quickbirdstudios:opencv:4.5.3.0`.
   If this dependency fails to resolve, you must download the OpenCV Android SDK manually.

2. **Manual Integration (If Automatic Fails)**:
   - Download the OpenCV Android SDK from [OpenCV.org](https://opencv.org/releases/).
   - Extract it.
   - Import the `sdk` module into the `android` project using Android Studio.
   - Update `android/app/build.gradle` to depend on the local project: `implementation project(':opencv')`.

## 🛠 Building the App

To build the APK, you need a full Android Development Environment:
- Java JDK 17+
- Android SDK (API 31+)
- Android NDK (Side-by-side)

Run the following in the root directory:
```bash
npx react-native run-android
```

## 📱 How to Use

1. Install the app on your phone.
2. Grant **Camera Permissions** when prompted (or in Settings).
3. Open the app and tap "Open Settings" to go to Accessibility Settings.
4. Enable **GestureControlApp** in the "Downloaded Services" section.
5. The foreground notification will appear ("Gesture Control Active").
6. The camera will now monitor for significant motion (vertical movement).
   - **Note**: This is a simplified demo. The current logic detects *any* significant motion and triggers a scroll down. Real-world usage requires tuning the optical flow algorithms in `GestureAccessibilityService.kt`.

## 🔒 Privacy & Permissions

- This app uses the **Camera** in the background. Android restricts this heavily.
- We use a **Foreground Service** notification to signal the user that the camera is active.
- **Accessibility Service** is used to inject scroll events into other apps.
