# Mini e-Bay

## To run the project following are the quick steps:

• Clone the project from Github

• cd <root folder of the project>

• run `npm install`

• For iOS

 - `cd ios`
 - `pod install`
 - Open `mini_ebay.xcworkspace` in XCode
 - Select simulator and run the project
• For Android
 - run command `npx react-native run-android`

## To run the detox test on Android:
• First we have to change the avdName in .detoxrc.json file 

from
```json
    "emulator": {
    "type": "android.emulator",
    "device": {
        "avdName": "Pixel_XL_API_26"
    }
}
```
  To
```json
    "emulator": {
    "type": "android.emulator",
    "device": {
        "avdName": "Your Emulator Name"
    }
}
```

• After that go to root folder of your project and open cmd and run :
  - `npm start`
• Open another terminal and run:
  - `cd android` 
  - `gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug`

• When build is successfully installed then run  :
  - `cd..`
  - `detox test -c android`