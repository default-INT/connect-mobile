# Connect

[![Node.js Version](https://img.shields.io/badge/Node.js-v20.10.0-green.svg)](https://nodejs.org/)
[![npm Version](https://img.shields.io/badge/yarn-v3.6.4-blueviolet.svg)](https://v3.yarnpkg.com/getting-started/install)
[![React Native Version](https://img.shields.io/badge/react--native-v0.73.0-darkblue.svg)](https://reactnative.dev/)
[![React Native Version](https://img.shields.io/badge/react-v18.2.0-blue.svg)](https://react.dev/)

## Introduction
Welcome to Connect! This is a React Native project designed to [briefly describe what your project does or its purpose].

## Installation
Before you get started, make sure you have Node.js installed on your machine. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install dependencies: `yarn install`
4. For iOS, navigate to the iOS directory and run `yarn run pod-install`

## Usage

### Running on Android
To run the project on an Android device or emulator, use the following command: `yarn run android`

### Running on iOS
To run the project on an iOS device or simulator, use the following command: `yarn run ios`

### Starting the Metro Bundler
To start the Metro Bundler, which is required for running the app, use the following command: `yarn start`

### Linting
To lint the project using ESLint, use the following command: `yarn run lint`

### Flipper
For start you a need to configure up your env. You need to install:
1. `homebrew`
2. `watchman`
3. `python` and `pip`
4. `idb` (docs: https://fbidb.io/docs/installation)
5. And finally `flipper` desktop and server
6. Good luck!

Also for debugging you could use a experimental devTools: `npx react-native start --experimental-debugger` 

## Trouble shooting

1. In Android HTTP requests not sending to `localhost:{port}`: 
   - For fix this issue you need run this command in your terminal: `adb reverse tcp:{port} tcp:{port}`
2. If you updated babel.config you need run this command: `yarn react-native start --reset-cache`


## Environment variables

Also you need set up env variables (`.env`, `.env.staging`, `.env.prod`), you could get its from head developer, file look like:
```
WEB_CLIENT_ID=<WEB_CLIENT_ID>
IOS_CLIENT_ID=<IOS_CLIENT_ID>
API_URL=<API_URL>

GOOGLE_MAP_API_KEY=<GOOGLE_MAP_API_KEY>
```

## Contributing

We welcome contributions! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
[Your License Here]


