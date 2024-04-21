# Reddit Clone

## Project Information

This project is currently under development and does not have a deployed preview version. Following the bellow instructions would allow running it in a local enviorment for preview purposes.

## Installation and Usage

Setup the packages

```shell
npm install
```

Install Git hooks and husky

```shell
npm run prepare
```

Run the app in development mode

```shell
npm run dev
```

Generate a production build

```shell
npm run build
```

## Firebase

### Setting up the Emulators

There are a few prequisites for the emulators to work such as Firebase Tools CLI, NodeJS and JDK.\
Please refer to the Firebase documentation:

- [Install, configure and integrate Local Emulator Suite](https://firebase.google.com/docs/emulator-suite/install_and_configure)

To initialize the emulators run:

```shell
firebase init emulators
```
For local development the emulators require firestore.rules and storage.rules. A default setup that fully allows read and writes are present in the repository. However in production mode the rules differ and will not be added to the repository as they might contain sensitive information in regards to the allowed access.

For more information regarding the securities rules language refer to:
- [Security Rules language](https://firebase.google.com/docs/rules/rules-language)

The project currently uses the following emulators:

- Authentication
- Firestore
- Storage

### Firebase Javascript SDK

- [Firebase Javascript SDK Documentation](https://github.com/firebase/firebase-js-sdk#firebase-javascript-sdk)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
