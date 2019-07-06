import {gte} from 'semver';
import {Rules} from './all-rules';

export const customRules: Rules = {
  'array-type': {options: ['array']},
  'comment-format': {options: ['check-space']},
  'completed-docs': false,
  'interface-name': {options: ['never-prefix']},
  'match-default-export-name': false,
  'max-classes-per-file': false,
  'max-file-line-count': false,
  'member-ordering': {options: {order: 'statics-first'}},
  'no-console': false,
  'no-empty': {options: ['allow-empty-catch']},
  'no-empty-interface': false,
  'no-import-side-effect': false,
  'no-inferrable-types': {options: ['ignore-params', 'ignore-properties']},
  'no-magic-numbers': false,
  'no-null-keyword': false,
  'no-object-literal-type-assertion': false,
  'no-parameter-properties': false,
  'no-submodule-imports': false,
  'no-this-assignment': {options: {'allow-destructuring': true}},
  'no-unbound-method': false,
  'no-unnecessary-callback-wrapper': false,
  'no-unnecessary-class': {
    options: [
      'allow-constructor-only',
      'allow-empty-class',
      'allow-static-only'
    ]
  },
  'no-unsafe-any': false,
  'no-use-before-declare': false,
  'no-void-expression': {options: ['ignore-arrow-function-shorthand']},
  'object-literal-sort-keys': false,
  'only-arrow-functions': {options: ['allow-declarations']},
  'ordered-imports': {
    options: {
      'import-sources-order': 'lowercase-last',
      'named-imports-order': 'lowercase-last'
    }
  },
  'prefer-function-over-method': false,
  'prefer-template': {options: ['allow-single-concat']},
  'return-undefined': false,
  'strict-boolean-expressions': false,
  'strict-type-predicates': false,
  'switch-default': false,
  'triple-equals': {options: ['allow-null-check']},
  typedef: {options: ['call-signature', 'parameter', 'property-declaration']},
  'variable-name': {
    options: [
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
      'allow-leading-underscore'
    ]
  }
};

// tslint:disable-next-line:no-require-imports no-var-requires
const tsLintVersion = require('tslint/package.json').version;

if (gte(tsLintVersion, '5.11.0')) {
  customRules['file-name-casing'] = {options: ['kebab-case']};
}

if (gte(tsLintVersion, '5.12.0')) {
  customRules['ban-ts-ignore'] = false;
  customRules['no-default-import'] = false;
}

if (gte(tsLintVersion, '5.18.0')) {
  customRules['strict-comparisons'] = {
    options: {'allow-object-equal-comparison': true}
  };
}
