import * as oclif from '@oclif/command';
import * as path from 'path';
import {writeJsonFile} from '../utils';

export const commandName = path.basename(__filename, '.js');

// tslint:disable-next-line:no-default-export
export default class InitTypeScript extends oclif.Command {
  public static description =
    'Creates a TypeScript configuration file with strict settings.';

  public static examples = [
    `$ ts-config ${commandName}`,
    `$ ts-config ${commandName} --force`,
    `$ ts-config ${commandName} --config='tsconfig.build.json'`,
    `$ ts-config ${commandName} --config='tsconfig.build.json' --force`
  ];

  public static flags = {
    help: oclif.flags.help({char: 'h'}),
    config: oclif.flags.string({
      char: 'c',
      default: 'tsconfig.json'
    }),
    force: oclif.flags.boolean({
      char: 'f',
      description: 'overwrite an existing configuration file'
    })
  };

  public async run(): Promise<void> {
    const {flags} = this.parse(InitTypeScript);

    writeJsonFile(
      flags.config as string,
      {
        include: ['src/**/*.ts', 'src/**/*.tsx', 'typings/**/*.d.ts'],
        compilerOptions: {
          target: 'ES2017',
          module: 'commonjs',
          moduleResolution: 'node',
          declaration: true,
          sourceMap: true,
          strict: true,
          noUnusedLocals: true,
          noUnusedParameters: true,
          noImplicitReturns: true,
          noFallthroughCasesInSwitch: true,
          forceConsistentCasingInFileNames: true,
          outDir: 'lib/'
        }
      },
      flags.force
    );
  }
}
