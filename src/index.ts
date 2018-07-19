import {RuleName, Rules, allRules, customRules, prettierRules} from './rules';
import {findRuleMetadata} from './utils';

export const rules: Rules = {...allRules, ...customRules, ...prettierRules};
export const jsRules: Rules = {};

for (const ruleName of Object.keys(rules) as RuleName[]) {
  const metadata = findRuleMetadata(ruleName);

  if (!metadata.typescriptOnly && !metadata.requiresTypeInfo) {
    jsRules[ruleName] = rules[ruleName];
  }
}

jsRules['no-require-imports'] = false;
jsRules['switch-default'] = true;
