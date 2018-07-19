import {dirname, join} from 'path';
import {IRuleMetadata, findRule} from 'tslint';

export function findRuleMetadata(ruleName: string): IRuleMetadata {
  const rule = findRule(
    ruleName,
    join(dirname(require.resolve('tslint')), 'rules')
  );

  if (!rule) {
    throw new Error(`Couldn't find rule '${ruleName}'.`);
  }

  return rule.metadata;
}
