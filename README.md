# R10

#### Goal

Create a react native app for a conference called R10

### To use

Clone this repo and run: `$ npm install` then
`cd ios && pod install`

### Known error work around

Due to the version of some packages being used
`rm node_modules/react-native/local-cli/core/__fixtures__/files/package.json` must be run to delete a file that the bundler can't handle.

use: `$ react-native run-ios` to run the App in the simulator

#### Technical description

This project uses React Native and can run on Android and IOS. It uses Redux to manage state, and Realm as an embedded database. It has an embedded map that was pretty fun to set up, and uses the React Animation package in the about page which is a nice touch.

#### Requirements

To run this project in a simulator XCode or Android Studio can be used

#### Author:

Scott Livingstone
