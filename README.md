[![Build Status](https://travis-ci.org/LancersDevTeam/react-web-pull-to-refresh.svg?branch=master)](https://travis-ci.org/LancersDevTeam/react-web-pull-to-refresh)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

# react-web-pull-to-refresh

A `pull to refresh` [React](https://facebook.github.io/react/) component.

## Installation

```
npm install --save react-web-pull-to-refresh
```

## Usage

`react-web-pull-to-refresh` provides `PullDownToRefresh` component.

## API

### `<PullDownToRefresh />`

A `pull to refresh` component. Please wrap a content which should be pull down area.

  + `className (string)` : CSS class name for `PullDownToRefresh`
  + `displayFlag (boolean)`: displayFlag for loading area
  + `pullDownHandler (Function)`: pull down handler
  + `borderHeight (number)`: loading area setting
  + `height (number)`: loading area setting
  + `fontSize (string)`: loading area setting
  + `threshold (number)`: loading area setting
  + `loadingContent (string | React.Element<*>)`: loading area setting

## Development

### Setup

```
npm install --global yarn
yarn install
yarn build
```

### Start dev server for examples

```
yarn start
```

Open `http://localhost:8080/`.

### Run test

```
yarn test
```

## TODO:

  - Add useful tests.
  - Add `PullUpToRefresh` component

## Reference Implementation

  - https://github.com/ErlendEllingsen/pull-to-reload
  - https://gist.github.com/youcune/551f082b6cabe4f4ae5c
  - http://qiita.com/zeriyoshi/items/d73d6712400d75dc8bea

## Changelog

See the [Releases](https://github.com/LancersDevTeam/react-web-pull-to-refresh/releases) page on GitHub.

## License

MIT

## Author

Kazuhiko Mori (mori.dev.asdf@gmail.com)
