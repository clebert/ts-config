// @ts-check

const autosrc = require('autosrc');

/** @type {autosrc.Rules} */
const rules = (exports.rules = {});

const update = target => `touch ${target}`;

rules.test = {
  prereqs: ['README.md'],
  recipe: target => [
    "yarn prettier --list-different '**/*.{js,json,md,ts,yml}'",
    "yarn tslint --config tslint.json --project . --format verbose '**/*.ts'",
    update(target)
  ]
};

rules['README.md'] = {
  prereqs: ['lib'],
  recipe: () => ['node lib/create-readme.js']
};

rules.lib = {
  prereqs: ['node_modules', 'src/**/*.ts', 'tsconfig.json'],
  recipe: target => ['yarn tsc --project .', update(target)]
};

rules.node_modules = {
  prereqs: ['package.json', 'yarn.lock'],
  recipe: target => ['yarn install --check-files', update(target)]
};

rules['yarn.lock'] = {
  recipe: () => ['yarn']
};

rules.clean = {
  phony: true,
  recipe: () => ['rm -rf lib/']
};
