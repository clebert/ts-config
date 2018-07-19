import {gte} from 'semver';
import {Rules} from './all-rules';

export const customRules: Rules = {
  'array-type': [true, 'array'],
  'comment-format': [true, 'check-space'],
  'completed-docs': false,
  'interface-name': [true, 'never-prefix'],
  'max-classes-per-file': false,
  'max-file-line-count': false,
  'member-ordering': [true, {order: 'statics-first'}],
  'no-console': false,
  'no-empty': [true, 'allow-empty-catch'],
  'no-empty-interface': false,
  'no-implicit-dependencies': [true, 'dev'],
  'no-inferrable-types': [true, 'ignore-params', 'ignore-properties'],
  'no-magic-numbers': false,
  'no-null-keyword': false,
  'no-parameter-properties': false,
  'no-submodule-imports': false,
  'no-this-assignment': [true, {'allow-destructuring': true}],
  'no-unbound-method': [true, 'ignore-static'],
  'no-unnecessary-callback-wrapper': false,
  'no-unnecessary-class': [
    true,
    'allow-constructor-only',
    'allow-empty-class',
    'allow-static-only'
  ],
  'no-unsafe-any': false,
  'no-unused-variable': false,
  'no-void-expression': [true, 'ignore-arrow-function-shorthand'],
  'object-literal-sort-keys': false,
  'only-arrow-functions': [true, 'allow-declarations'],
  'ordered-imports': [
    true,
    {
      'import-sources-order': 'lowercase-last',
      'named-imports-order': 'lowercase-last'
    }
  ],
  'prefer-template': [true, 'allow-single-concat'],
  'return-undefined': false,
  'strict-boolean-expressions': [
    false,
    'allow-null-union',
    'allow-undefined-union',
    'allow-string',
    'allow-number'
  ],
  'switch-default': false,
  'triple-equals': [true, 'allow-null-check'],
  typedef: [true, 'call-signature', 'parameter', 'property-declaration'],
  'variable-name': [
    true,
    'ban-keywords',
    'check-format',
    'allow-pascal-case',
    'allow-leading-underscore'
  ]
};

// tslint:disable-next-line:no-require-imports no-var-requires
const tsLintVersion = require('tslint/package.json').version;

if (gte(tsLintVersion, '5.11.0')) {
  customRules['file-name-casing'] = [true, 'kebab-case'];
}
