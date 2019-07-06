# ts-config

[![Package Version](https://img.shields.io/npm/v/ts-config.svg)](https://yarnpkg.com/en/package/ts-config)
[![Build Status](https://travis-ci.org/clebert/ts-config.svg?branch=master)](https://travis-ci.org/clebert/ts-config)

> An opinionated TSLint configuration preset. Works best together with strict
> TypeScript settings and Prettier.

## Getting started

First, install `ts-config` as a dev dependency:

```sh
# Install using Yarn
yarn add -D ts-config tslint typescript
```

```sh
# or install using npm
npm install -D ts-config tslint typescript
```

Then use the [CLI](#init-tslint) to create a TSLint configuration file that
extends this configuration preset:

```sh
npx ts-config init-tslint
```

_Optional:_ Use the [CLI](#init-typescript) to create a TypeScript configuration
file with strict settings:

```sh
# Create a TypeScript configuration
npx ts-config init-typescript
```

```sh
# or create a TypeScript configuration for a React project
npx ts-config init-typescript --react
```

Now you can run TSLint as follows (assuming that TypeScript and Prettier are
configured accordingly):

```sh
# Lint your TS sources
npx tslint --config tslint.json --project . '**/*.{ts,tsx}'
```

```sh
# and lint your JS sources
npx tslint --config tslint.json '**/*.{js,jsx}'
```

## CLI commands

### init-tslint

```sh
$ npx ts-config init-tslint help

Creates a TSLint configuration file that extends this configuration preset.

USAGE
  $ ts-config init-tslint

OPTIONS
  -c, --config=config  [default: tslint.json]
  -f, --force          overwrite an existing configuration file
  -h, --help           show CLI help

EXAMPLES
  $ ts-config init-tslint
  $ ts-config init-tslint --config='tslint.build.json' --force
```

### init-typescript

```sh
$ npx ts-config init-typescript help

Creates a TypeScript configuration file with strict settings.

USAGE
  $ ts-config init-typescript

OPTIONS
  -c, --config=config  [default: tsconfig.json]
  -f, --force          overwrite an existing configuration file
  -h, --help           show CLI help
  -r, --react          add React-specific settings

EXAMPLES
  $ ts-config init-typescript
  $ ts-config init-typescript --config='tsconfig.build.json' --force --react
```

## Configuration preset

This dynamically generated configuration preset is compatible to
[TSLint](https://palantir.github.io/tslint/) in version `^5.10.0`. It is based
on the built-in configuration preset `tslint:all`:

> **`tslint:all`** turns on all rules to their strictest settings. This will use
> type checking, so it must be combined with the `--project option`. (Exceptions
> include rules such as `"ban"`, `"import-blacklist"`, and `"file-header"`,
> which have no sensible defaults, and deprecated rules.)

**It is assumed that [TypeScript](https://www.typescriptlang.org/) is configured
with strict settings. Also, it is assumed that [Prettier](https://prettier.io/)
is used for formatting your sources.**

The deviations from the configuration preset
[`tslint:all@5.18.0`](https://github.com/palantir/tslint/blob/5.18.0/src/configs/all.ts)
are documented below:

- [TypeScript and JavaScript rule overrides](#typescript-and-javascript-rule-overrides)
- [TypeScript-only rule overrides](#typescript-only-rule-overrides)
- [JavaScript-only rule overrides](#javascript-only-rule-overrides)

### TypeScript and JavaScript rule overrides

#### [align](https://palantir.github.io/tslint/rules/align/)

- Unnecessary because of Prettier.

```diff
{
-  align: {
-    options: [
-      "parameters"
-      "arguments"
-      "statements"
-      "elements"
-      "members"
-    ]
-  }
+  align: false
 }
```

#### [arrow-parens](https://palantir.github.io/tslint/rules/arrow-parens/)

- Unnecessary because of Prettier.

```diff
{
-  arrow-parens: true
+  arrow-parens: false
 }
```

#### [comment-format](https://palantir.github.io/tslint/rules/comment-format/)

```diff
{
   comment-format: {
     options: [
       "check-space"
-      "check-uppercase"
     ]
   }
 }
```

#### [completed-docs](https://palantir.github.io/tslint/rules/completed-docs/)

```diff
{
-  completed-docs: true
+  completed-docs: false
 }
```

#### [file-name-casing](https://palantir.github.io/tslint/rules/file-name-casing/)

```diff
{
   file-name-casing: {
-    options: "camel-case"
+    options: [
+      "kebab-case"
+    ]
   }
 }
```

#### [indent](https://palantir.github.io/tslint/rules/indent/)

- Unnecessary because of Prettier.

```diff
{
-  indent: {
-    options: [
-      "spaces"
-    ]
-  }
+  indent: false
 }
```

#### [max-classes-per-file](https://palantir.github.io/tslint/rules/max-classes-per-file/)

```diff
{
-  max-classes-per-file: {
-    options: 1
-  }
+  max-classes-per-file: false
 }
```

#### [max-file-line-count](https://palantir.github.io/tslint/rules/max-file-line-count/)

```diff
{
-  max-file-line-count: {
-    options: 1000
-  }
+  max-file-line-count: false
 }
```

#### [max-line-length](https://palantir.github.io/tslint/rules/max-line-length/)

- Unnecessary because of Prettier.

```diff
{
-  max-line-length: {
-    options: {
-      limit: 120
-    }
-  }
+  max-line-length: false
 }
```

#### [member-ordering](https://palantir.github.io/tslint/rules/member-ordering/)

```diff
{
   member-ordering: {
     options: {
-      alphabetize: true
     }
   }
 }
```

#### [newline-per-chained-call](https://palantir.github.io/tslint/rules/newline-per-chained-call/)

- Unnecessary because of Prettier.

```diff
{
-  newline-per-chained-call: true
+  newline-per-chained-call: false
 }
```

#### [no-console](https://palantir.github.io/tslint/rules/no-console/)

```diff
{
-  no-console: true
+  no-console: false
 }
```

#### [no-default-import](https://palantir.github.io/tslint/rules/no-default-import/)

```diff
{
-  no-default-import: true
+  no-default-import: false
 }
```

#### [no-empty](https://palantir.github.io/tslint/rules/no-empty/)

```diff
{
-  no-empty: true
+  no-empty: {
+    options: [
+      "allow-empty-catch"
+    ]
+  }
 }
```

#### [no-import-side-effect](https://palantir.github.io/tslint/rules/no-import-side-effect/)

```diff
{
-  no-import-side-effect: true
+  no-import-side-effect: false
 }
```

#### [no-magic-numbers](https://palantir.github.io/tslint/rules/no-magic-numbers/)

```diff
{
-  no-magic-numbers: true
+  no-magic-numbers: false
 }
```

#### [no-null-keyword](https://palantir.github.io/tslint/rules/no-null-keyword/)

```diff
{
-  no-null-keyword: true
+  no-null-keyword: false
 }
```

#### [no-submodule-imports](https://palantir.github.io/tslint/rules/no-submodule-imports/)

```diff
{
-  no-submodule-imports: true
+  no-submodule-imports: false
 }
```

#### [no-this-assignment](https://palantir.github.io/tslint/rules/no-this-assignment/)

```diff
{
-  no-this-assignment: true
+  no-this-assignment: {
+    options: {
+      allow-destructuring: true
+    }
+  }
 }
```

#### [no-unnecessary-callback-wrapper](https://palantir.github.io/tslint/rules/no-unnecessary-callback-wrapper/)

```diff
{
-  no-unnecessary-callback-wrapper: true
+  no-unnecessary-callback-wrapper: false
 }
```

#### [no-unnecessary-class](https://palantir.github.io/tslint/rules/no-unnecessary-class/)

```diff
{
   no-unnecessary-class: {
     options: [
+      "allow-constructor-only"
       "allow-empty-class"
+      "allow-static-only"
     ]
   }
 }
```

#### [object-literal-key-quotes](https://palantir.github.io/tslint/rules/object-literal-key-quotes/)

- Unnecessary because of Prettier.

```diff
{
-  object-literal-key-quotes: {
-    options: "consistent-as-needed"
-  }
+  object-literal-key-quotes: false
 }
```

#### [object-literal-sort-keys](https://palantir.github.io/tslint/rules/object-literal-sort-keys/)

```diff
{
-  object-literal-sort-keys: true
+  object-literal-sort-keys: false
 }
```

#### [only-arrow-functions](https://palantir.github.io/tslint/rules/only-arrow-functions/)

```diff
{
-  only-arrow-functions: true
+  only-arrow-functions: {
+    options: [
+      "allow-declarations"
+    ]
+  }
 }
```

#### [ordered-imports](https://palantir.github.io/tslint/rules/ordered-imports/)

```diff
{
   ordered-imports: {
     options: {
-      grouped-imports: true
-      module-source-path: "full"
-      import-sources-order: "case-insensitive"
+      import-sources-order: "lowercase-last"
-      named-imports-order: "case-insensitive"
+      named-imports-order: "lowercase-last"
     }
   }
 }
```

#### [prefer-function-over-method](https://palantir.github.io/tslint/rules/prefer-function-over-method/)

```diff
{
-  prefer-function-over-method: true
+  prefer-function-over-method: false
 }
```

#### [prefer-template](https://palantir.github.io/tslint/rules/prefer-template/)

```diff
{
-  prefer-template: true
+  prefer-template: {
+    options: [
+      "allow-single-concat"
+    ]
+  }
 }
```

#### [quotemark](https://palantir.github.io/tslint/rules/quotemark/)

- Unnecessary because of Prettier.

```diff
{
-  quotemark: {
-    options: [
-      "double"
-      "avoid-escape"
-      "avoid-template"
-    ]
-  }
+  quotemark: false
 }
```

#### [semicolon](https://palantir.github.io/tslint/rules/semicolon/)

- Unnecessary because of Prettier.

```diff
{
-  semicolon: {
-    options: [
-      "always"
-    ]
-  }
+  semicolon: false
 }
```

#### [switch-default](https://palantir.github.io/tslint/rules/switch-default/)

- **TypeScript-only**: Unnecessary because of the TypeScript setting
  `--noImplicitReturns`.

```diff
{
-  switch-default: true
+  switch-default: false
 }
```

#### [trailing-comma](https://palantir.github.io/tslint/rules/trailing-comma/)

- Unnecessary because of Prettier.

```diff
{
-  trailing-comma: {
-    options: {
-      esSpecCompliant: true
-      multiline: "always"
-      singleline: "never"
-    }
-  }
+  trailing-comma: false
 }
```

#### [triple-equals](https://palantir.github.io/tslint/rules/triple-equals/)

```diff
{
-  triple-equals: true
+  triple-equals: {
+    options: [
+      "allow-null-check"
+    ]
+  }
 }
```

#### [variable-name](https://palantir.github.io/tslint/rules/variable-name/)

```diff
{
   variable-name: {
     options: [
       "ban-keywords"
       "check-format"
-      "require-const-for-all-caps"
+      "allow-pascal-case"
+      "allow-leading-underscore"
     ]
   }
 }
```

#### [whitespace](https://palantir.github.io/tslint/rules/whitespace/)

- Unnecessary because of Prettier.

```diff
{
-  whitespace: {
-    options: [
-      "check-branch"
-      "check-decl"
-      "check-operator"
-      "check-module"
-      "check-separator"
-      "check-type"
-      "check-typecast"
-      "check-preblock"
-      "check-type-operator"
-      "check-rest-spread"
-    ]
-  }
+  whitespace: false
 }
```

### TypeScript-only rule overrides

#### [array-type](https://palantir.github.io/tslint/rules/array-type/)

```diff
{
   array-type: {
-    options: "array-simple"
+    options: [
+      "array"
+    ]
   }
 }
```

#### [ban-ts-ignore](https://palantir.github.io/tslint/rules/ban-ts-ignore/)

```diff
{
-  ban-ts-ignore: true
+  ban-ts-ignore: false
 }
```

#### [interface-name](https://palantir.github.io/tslint/rules/interface-name/)

```diff
{
-  interface-name: true
+  interface-name: {
+    options: [
+      "never-prefix"
+    ]
+  }
 }
```

#### [match-default-export-name](https://palantir.github.io/tslint/rules/match-default-export-name/)

```diff
{
-  match-default-export-name: true
+  match-default-export-name: false
 }
```

#### [no-empty-interface](https://palantir.github.io/tslint/rules/no-empty-interface/)

```diff
{
-  no-empty-interface: true
+  no-empty-interface: false
 }
```

#### [no-inferrable-types](https://palantir.github.io/tslint/rules/no-inferrable-types/)

```diff
{
   no-inferrable-types: {
     options: [
       "ignore-params"
+      "ignore-properties"
     ]
   }
 }
```

#### [no-object-literal-type-assertion](https://palantir.github.io/tslint/rules/no-object-literal-type-assertion/)

```diff
{
-  no-object-literal-type-assertion: true
+  no-object-literal-type-assertion: false
 }
```

#### [no-parameter-properties](https://palantir.github.io/tslint/rules/no-parameter-properties/)

```diff
{
-  no-parameter-properties: true
+  no-parameter-properties: false
 }
```

#### [no-unbound-method](https://palantir.github.io/tslint/rules/no-unbound-method/)

```diff
{
-  no-unbound-method: true
+  no-unbound-method: false
 }
```

#### [no-unsafe-any](https://palantir.github.io/tslint/rules/no-unsafe-any/)

```diff
{
-  no-unsafe-any: true
+  no-unsafe-any: false
 }
```

#### [no-use-before-declare](https://palantir.github.io/tslint/rules/no-use-before-declare/)

```diff
{
-  no-use-before-declare: true
+  no-use-before-declare: false
 }
```

#### [no-void-expression](https://palantir.github.io/tslint/rules/no-void-expression/)

```diff
{
-  no-void-expression: true
+  no-void-expression: {
+    options: [
+      "ignore-arrow-function-shorthand"
+    ]
+  }
 }
```

#### [return-undefined](https://palantir.github.io/tslint/rules/return-undefined/)

```diff
{
-  return-undefined: true
+  return-undefined: false
 }
```

#### [strict-boolean-expressions](https://palantir.github.io/tslint/rules/strict-boolean-expressions/)

```diff
{
-  strict-boolean-expressions: true
+  strict-boolean-expressions: false
 }
```

#### [strict-comparisons](https://palantir.github.io/tslint/rules/strict-comparisons/)

```diff
{
-  strict-comparisons: true
+  strict-comparisons: {
+    options: {
+      allow-object-equal-comparison: true
+    }
+  }
 }
```

#### [strict-type-predicates](https://palantir.github.io/tslint/rules/strict-type-predicates/)

```diff
{
-  strict-type-predicates: true
+  strict-type-predicates: false
 }
```

#### [typedef](https://palantir.github.io/tslint/rules/typedef/)

```diff
{
   typedef: {
     options: [
       "call-signature"
-      "arrow-call-signature"
       "parameter"
-      "arrow-parameter"
       "property-declaration"
-      "variable-declaration"
-      "member-variable-declaration"
     ]
   }
 }
```

### JavaScript-only rule overrides

#### [no-require-imports](https://palantir.github.io/tslint/rules/no-require-imports/)

```diff
{
-  no-require-imports: true
+  no-require-imports: false
 }
```

#### [switch-default](https://palantir.github.io/tslint/rules/switch-default/)

- **TypeScript-only**: Unnecessary because of the TypeScript setting
  `--noImplicitReturns`.

```diff
{
-  switch-default: false
+  switch-default: true
 }
```

---

Copyright (c) 2016-present, Clemens Akens. Released under the terms of the
[MIT License](https://github.com/clebert/ts-config/blob/master/LICENSE).
