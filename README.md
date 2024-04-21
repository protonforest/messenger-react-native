
## WSL
If using WSL, you will have trouble connecting your react native app to an emulation being run on Windows

## Commands
Create React Native app : `npx create-expo-app your_app_name`

Install Expo CLI: `npm install -g expo-cli`
Install Expo Router: `npx expo install expo-router`
Login to Expo : `expo login`

Start Adb Service: `adb start-server`
Kill Adb Service: `adb kill-server`

Start Emulator via Android Studio. 

Start Expo for Local Emulator access: `npm run android`
Start Expo for Remote access: `npx expo start --tunnel`
