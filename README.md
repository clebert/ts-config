# ts-config

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
    "outDir": "./lib",
    "rootDir": "./src"
  },
  "include": ["./src/**/*.ts"]
}
```

## Release

```sh
npm run release
```
