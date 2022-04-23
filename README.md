# React Native Xite-Test

Be aware that this project aims to be a oozou test is for solely for Xite.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [typescript](https://www.typescriptlang.org/) is JavaScript with syntax for types.
- [native-base](https://nativebase.io/) is an accessible, utility-first component library that helps you build consistent UI across Android, iOS and Web..
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [jest](https://facebook.github.io/jest/) and [enzyme](https://enzymejs.github.io/enzyme/) for testing.

## Usage

### How to run

- Go to your project's root folder and run `npm install` or simply `yarn`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)

### How to test

Run `npm run test` to start your test cases!

(Using yarn: `yarn test`)

## Folder structure

This template follows a very simple project structure:

- `__test__`: This folder is the mainly container of all the test cases of the application.
- `src`: This folder is the main container of all the code inside your application.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `routes`: Folder to store the navigators.
  - `screens`: Folder that contains all your application screens/features.
  - `services`: Folder that contains all your application APi configurations.
  - `store`: Folder that contains redux store files.
     - `store`: Folder to put all redux middlewares and the store.
     - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
     - `actions`: This folder contains all actions that can be dispatched to redux.
     - `selectors`: Folder to store your selectors for each reducer.
     - `types`: Folder to store your types of actions/reducers.
  - `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

# How to use it

The idea of this section is to explain how the readme composition is the best and easiest to use when you try to use well-formed, architectures, especially using redux flow.

The readme follows a simple and convenient exporting pattern. The folder index exposes the resources, allowing to import all from the same path.

With that in mind, we are going to look at each folder to explain how to use it.

## Components

Components are the basic blocks of a react native application, but since we​​ aim to minimize development complexity, all the components are at the same nesting level.

## Redux

Once the components are defined, they are tied to the management of information through the application. For this, Redux is implemented with the store-reducer-action structure as usual, however, not only the data is handled through the actions but the success and error responses are also defined by the same form.

### Redux folders

4 folders divide the redux work

- Store: Here you define the store shape and you can configure the persistReducer and middlewares.
- Actions: Remember to create the file and the corresponding test for each action classification. Here you define actions for success and error scenarios.
- Reducers: You have the error and success reducers by default. Create the other classifications and try to keep simple each file. Here you modify the store.
- Selectors: Create one file for each action classification. Here you define what part of the store you need to see in your interface.
- types: here you can define types of actions/reducers/store.

## Screens

In this folder, you have the main objects to apply the composition architecture. Just create a file for each screen you have in your application, call all the components and static resources you need to render the scene and finally use the corresponding hooks to interact with redux and create behaviors depending on the store.
