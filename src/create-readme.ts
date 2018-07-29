import {writeFileSync} from 'fs';
import {format} from 'prettier';
import {jsRules, rules} from '.';
import {commandName as initTsLintCommandName} from './commands/init-tslint';
import {commandName as initTypeScriptCommandName} from './commands/init-typescript';
import {RuleName, allRules, prettierRules} from './rules';
import {getHelp, renderRule} from './utils';

const comments: {[ruleName in RuleName]?: string[]} = {
  'no-unused-variable': [
    'Deprecated since TypeScript 2.9. Please use the built-in compiler checks instead.'
  ],
  'switch-default': [
    '**TypeScript-only**: Unnecessary because of the TypeScript setting `--noImplicitReturns`.'
  ]
};

for (const ruleName of Object.keys(prettierRules) as RuleName[]) {
  comments[ruleName] = [
    ...(comments[ruleName] || []),
    'Unnecessary because of Prettier.'
  ];
}

// tslint:disable-next-line:no-require-imports no-var-requires
const packageName = require('../package.json').name;

// tslint:disable-next-line:no-require-imports no-var-requires
const tsLintVersion = require('tslint/package.json').version;

const readme = `
# ${packageName}

[![Package Version](https://img.shields.io/npm/v/${packageName}.svg)](https://yarnpkg.com/en/package/${packageName})
[![Build Status](https://travis-ci.org/clebert/${packageName}.svg?branch=master)](https://travis-ci.org/clebert/${packageName})

> An opinionated TSLint configuration preset. Works best together with strict
> TypeScript settings and Prettier.

## Getting started

First, install \`${packageName}\` as a dev dependency:

\`\`\`sh
yarn add -D ${packageName} tslint typescript
\`\`\`

\`\`\`sh
npm install -D ${packageName} tslint typescript
\`\`\`

Then use the [CLI](#${initTsLintCommandName}) to create a TSLint configuration
file that extends this configuration preset:

\`\`\`sh
npx ts-config ${initTsLintCommandName}
\`\`\`

_Optional:_ Use the [CLI](#${initTypeScriptCommandName}) to create a TypeScript
configuration file with strict settings:

\`\`\`sh
npx ts-config ${initTypeScriptCommandName}
\`\`\`

Now you can run TSLint as follows (assuming that TypeScript and Prettier are
configured accordingly):

\`\`\`sh
# Lint your TS sources
npx tslint --config tslint.json --project . '**/*.{ts,tsx}'

# Lint your JS sources
npx tslint --config tslint.json '**/*.{js,jsx}'
\`\`\`

## CLI commands

### ${initTsLintCommandName}

\`\`\`sh
$ npx ts-config ${initTsLintCommandName} help

${getHelp(initTsLintCommandName)}
\`\`\`

### ${initTypeScriptCommandName}

\`\`\`sh
$ npx ts-config ${initTypeScriptCommandName} help

${getHelp(initTypeScriptCommandName)}
\`\`\`

## Configuration preset

This dynamically generated configuration preset is compatible to
[TSLint](https://palantir.github.io/tslint/) in version \`^5.10.0\`. It is based
on the built-in configuration preset \`tslint:all\`:

> **\`tslint:all\`** turns on all rules to their strictest settings. This will
> use type checking, so it must be combined with the \`--project option\`.
> (Exceptions include rules such as \`"ban"\`, \`"import-blacklist"\`, and
> \`"file-header"\`, which have no sensible defaults, and deprecated rules.)

**It is assumed that [TypeScript](https://www.typescriptlang.org/) is configured
with strict settings. Also, it is assumed that [Prettier](https://prettier.io/)
is used for formatting your sources.**

The deviations from the configuration preset
[\`tslint:all@${tsLintVersion}\`](https://github.com/palantir/tslint/blob/${tsLintVersion}/src/configs/all.ts)
are documented below:

- [TypeScript and JavaScript rule overrides](#typescript-and-javascript-rule-overrides)
- [TypeScript-only rule overrides](#typescript-only-rule-overrides)
- [JavaScript-only rule overrides](#javascript-only-rule-overrides)

### TypeScript and JavaScript rule overrides

${(Object.keys(rules) as RuleName[])
  .sort()
  .filter(ruleName => ruleName in jsRules)
  .map(ruleName => renderRule(ruleName, allRules, rules, comments[ruleName]))
  .filter(Boolean)
  .join('\n\n')}

### TypeScript-only rule overrides

${(Object.keys(rules) as RuleName[])
  .sort()
  .filter(ruleName => !(ruleName in jsRules))
  .map(ruleName => renderRule(ruleName, allRules, rules, comments[ruleName]))
  .filter(Boolean)
  .join('\n\n')}

### JavaScript-only rule overrides

${(Object.keys(jsRules) as RuleName[])
  .sort()
  .map(ruleName => renderRule(ruleName, rules, jsRules, comments[ruleName]))
  .filter(Boolean)
  .join('\n\n')}

---

Copyright (c) 2016-present, Clemens Akens. Released under the terms of the
[MIT License](https://github.com/clebert/${packageName}/blob/master/LICENSE).
`.trimLeft();

const formattedReadme = format(readme, {
  parser: 'markdown',
  proseWrap: 'always'
});

writeFileSync('README.md', formattedReadme, {encoding: 'utf8'});
