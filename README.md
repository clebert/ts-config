# ts-config

[![npm][0]][1]
[![Build Status][2]][3]
[![Commitizen friendly][4]][5]

Extendable [TSLint][6] and [TypeScript][7] configs.

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

or when running tslint with type-checking on:

```json
{
  "extends": "./node_modules/ts-config/tslint-type-info.json"
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

### Installing the dev dependencies

```sh
npm install
```

### Running the tests

```sh
npm test
```

### Committing a new change

```sh
npm run cz
```

### Publishing a new version

```sh
npm run release
```

```sh
git push --follow-tags origin master
```

```sh
npm publish
```

---
Built by (c) Clemens Akens. Released under the MIT license.

[0]: https://img.shields.io/npm/v/ts-config.svg?maxAge=3600
[1]: https://www.npmjs.com/package/ts-config
[2]: https://travis-ci.org/clebert/ts-config.svg?branch=master
[3]: https://travis-ci.org/clebert/ts-config
[4]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[5]: http://commitizen.github.io/cz-cli/
[6]: https://github.com/palantir/tslint
[7]: https://github.com/Microsoft/TypeScript
