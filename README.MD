## Installation
> Make sure you've all the peer dendencies menthined below are in your project, otherwise install the packages with the exact version specified bellow

|Packages|version|
|-|-|
prettier | 2.0.5
eslint | 7.2.0
eslint-config-airbnb | 18.2.0
eslint-config-prettier | 6.11.0
eslint-plugin-import | 2.21.2
eslint-plugin-jsx-a11y | 6.3.0
eslint-plugin-react | 7.20.0
eslint-plugin-react-hooks | 4.0.4
*eslint-plugin-react-native | 3.8.1

```sh
yarn add \
  prettier@2.0.5 \
  eslint@7.2.0 \
  eslint-plugin-import@2.21.2 \
  eslint-plugin-jsx-a11y@6.3.0 \
  eslint-plugin-react@7.20.0 \
  eslint-plugin-react-hooks@4.0.4 \
  eslint-config-prettier@6.11.0 \
  eslint-config-airbnb@18.2.0 --dev
```

> *Note: Install eslint-plugin-react-native only if you're using react-native
```sh
yarn add eslint-plugin-react-native@3.8.1 --dev
```

> Install the stable version:

```sh
yarn add @guggugit/eslint-config --dev --exact
```

## Configuration
> In `.eslintrc`
```js
{
  "extends": [
    "@guggugit"
  ],
  "plugins": [
    "react",
    "react-native" // if you're using react-native
  ],
  ...,
  "prettier": "@guggugit/prettier-config",
  "dependencies": {
  "prettier": "x.y.z"
  },
  ...
}
```
