# ts-config

[![npm](https://img.shields.io/npm/v/ts-config.svg?maxAge=2592000)](https://www.npmjs.com/package/ts-config)
[![Build Status](https://travis-ci.org/clebert/ts-config.svg?branch=master)](https://travis-ci.org/clebert/ts-config)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Extendable [TSLint](https://github.com/palantir/tslint) and [TypeScript](https://github.com/Microsoft/TypeScript) configs.

## Installation

```sh
npm install --save-dev --save-exact ts-config
```

## Usage

Add a `tslint.json` file to your projects root directory with the contents below:

```json
{
  "extends": "./node_modules/ts-config/tslint.json"
}
```

Add a `tsconfig.json` file to your projects root directory with the contents below:

```json
{
  "extends": "./node_modules/ts-config/tsconfig.json",
  "compilerOptions": {
    "outDir": "lib",
    "rootDir": "src"
  },
  "exclude": ["lib", "node_modules"]
}
```

## Development

Installing the dev dependencies:

```sh
npm install
```

Running the tests:

```sh
npm test
```

Committing a new change:

```sh
npm run commit
```

Releasing a new version:

```sh
npm run release
```
