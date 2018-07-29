import {rules as allRules} from 'tslint/lib/configs/all';

export type RuleName = keyof (typeof allRules);
export type Rules = {[ruleName in RuleName]?: {}};

export {allRules};
