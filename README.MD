## Installation
> Make sure you've all the peer dendencies menthined below are in your project, otherwise install the packages with the exact version specified bellow

|Packages|version|
|-|-|
prettier | 2.2.1
eslint | 7.22.0
eslint-config-airbnb | 18.2.1
eslint-config-prettier | 8.1.0
eslint-plugin-import | 2.22.1
eslint-plugin-jsx-a11y | 6.4.1
eslint-plugin-react | 7.21.5
eslint-plugin-react-hooks | 4.2.0
*eslint-plugin-react-native | 3.10.0


```sh
yarn add \
  prettier@2.2.1 \
  eslint@7.22.0 \
  eslint-plugin-import@2.22.1 \
  eslint-plugin-jsx-a11y@6.4.1 \
  eslint-plugin-react@7.21.5 \
  eslint-plugin-react-hooks@4.2.0 \
  eslint-config-prettier@8.1.0 \
  eslint-config-airbnb@18.2.1 --dev
```

> *Note: Install eslint-plugin-react-native only if you're using react-native
```sh
yarn add eslint-plugin-react-native@3.10.0 --dev
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
  "rules": {
  }
}
```
