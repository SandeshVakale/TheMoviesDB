# TheMovieDB App

React native test app for TheMovieDB

## Available Scripts
If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

###npm start
Runs your app in development mode.

###npm start -- --reset-cache
or
###yarn start -- --reset-cache
###npm run test
Runs the jest test runner on your tests.

###npx react-native run-ios
Like npm start, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

###npx react-native run-android
Like npm start, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see React Native docs for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of adb available to Create React Native App:

###Using Android Studio's adb
Make sure that you can run adb from your terminal.
Open Genymotion and navigate to Settings -> ADB. Select “Use custom Android SDK tools” and update with your Android SDK directory.
Using Genymotion's adb
Find Genymotion’s copy of adb. On macOS for example, this is normally /Applications/Genymotion.app/Contents/MacOS/tools/.
Add the Genymotion tools directory to your path (instructions for Mac, Linux, and Windows).
Make sure that you can run adb from your terminal.

