import * as oclif from '@oclif/command';
import * as path from 'path';
import {writeJsonFile} from '../utils';

export const commandName = path.basename(__filename, '.js');

// tslint:disable-next-line:no-default-export
export default class InitTsLint extends oclif.Command {
  public static description =
    'Creates a TSLint configuration file that extends this configuration preset.';

  public static examples = [
    `$ ts-config ${commandName}`,
    `$ ts-config ${commandName} --config='tslint.build.json' --force`
  ];

  public static flags = {
    help: oclif.flags.help({char: 'h'}),
    config: oclif.flags.string({
      char: 'c',
      default: 'tslint.json'
    }),
    force: oclif.flags.boolean({
      char: 'f',
      description: 'overwrite an existing configuration file'
    })
  };

  public async run(): Promise<void> {
    const {flags} = this.parse(InitTsLint);

    writeJsonFile(
      flags.config as string,
      {
        extends: 'ts-config',
        linterOptions: {exclude: ['**/lib/**', '**/node_modules/**']}
      },
      flags.force
    );

    return;
  }
}
