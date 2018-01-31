# ts-config

[![npm][0]][1]
[![build][2]][3]
[![semantic-release][4]][5]
[![Greenkeeper][6]][7]
[![TypeScript][8]][9]

Extendable, well-designed configurations for the latest versions of [TSLint][10] and [TypeScript][9].

## Installation

```sh
npm install --save-dev ts-config
```

## Usage

Add the following config files to your projects root directory:

### tslint.json

```json
{
  "extends": "ts-config/tslint"
}
```

### tsconfig.json

```json
{
  "extends": "./node_modules/ts-config/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "exclude": ["dist", "node_modules"]
}
```

## Development

### Installing dev dependencies

```sh
npm install
```

### Running tests

```sh
npm test
```

---
Built by (c) Clemens Akens. Released under the MIT license.

[0]: https://img.shields.io/npm/v/ts-config.svg?maxAge=3600
[1]: https://www.npmjs.com/package/ts-config
[2]: https://travis-ci.org/clebert/ts-config.svg?branch=master
[3]: https://travis-ci.org/clebert/ts-config
[4]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[5]: https://github.com/semantic-release/semantic-release
[6]: https://badges.greenkeeper.io/clebert/ts-config.svg
[7]: https://greenkeeper.io/
[8]: https://img.shields.io/badge/TypeScript-friendly-blue.svg
[9]: http://www.typescriptlang.org/
[10]: https://github.com/palantir/tslint
