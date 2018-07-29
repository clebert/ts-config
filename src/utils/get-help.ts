import {execSync} from 'child_process';
import {join} from 'path';

export function getHelp(commandName: string): string {
  const command = `${process.argv[0]} ${join(
    __dirname,
    '../../bin/run'
  )} ${commandName} help`;

  const help = execSync(command)
    .toString('utf8')
    .trim();

  if (!help) {
    throw new Error(`The help string is unexpectedly empty: '${command}'`);
  }

  return help;
}
