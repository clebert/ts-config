import {codeBlock} from 'common-tags';
import {diff as createDiff} from 'json-diff';
import {colorize} from 'json-diff/lib/colorize';
import {RuleName, Rules} from '../rules';

function renderRuleDiff(
  ruleName: RuleName,
  currentRules: Rules,
  nextRules: Rules
): string | undefined {
  const diff = createDiff(
    {[ruleName]: currentRules[ruleName]},
    {[ruleName]: nextRules[ruleName]}
  );

  if (!diff) {
    return;
  }

  return codeBlock`
    \`\`\`diff
    ${colorize(diff, {color: false}).trim()}
    \`\`\`
  `;
}

export function renderRule(
  ruleName: RuleName,
  currentRules: Rules,
  nextRules: Rules,
  comments: string[] = []
): string | undefined {
  const diff = renderRuleDiff(ruleName, currentRules, nextRules);

  if (!diff) {
    return;
  }

  const link = `[${ruleName}](https://palantir.github.io/tslint/rules/${ruleName}/)`;

  const body = comments
    ? comments.map(comment => `- ${comment}`).join('\n')
    : '';

  return `#### ${link}\n\n${body && `${body}\n\n`}${diff}`;
}
