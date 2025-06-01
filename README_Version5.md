# CHIPS Browser — Android Studio Project

## Structure
- `app/`: Main Android app module.
- `MainActivity.java`: Entry point, loads `core.protocol.chipx` from assets.
- `assets/`: Place your `.chipx` files here.

## How to Build:
1. Open Android Studio and select "Open an Existing Project".
2. Navigate to this folder and select the project root.
3. Click "Build" → "Build APK(s)".
4. Find your APK in `app/build/outputs/apk/debug/`.

## Notes:
- Implement interpreter logic in `MainActivity.java` as needed.
- See `AndroidManifest.xml` for app configuration.