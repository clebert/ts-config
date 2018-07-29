import * as fs from 'fs';
import {format} from 'prettier';

function fileExists(filename: string): boolean {
  try {
    fs.accessSync(filename, fs.constants.F_OK);

    return true;
  } catch {
    return false;
  }
}

function readJsonFile(filename: string): object {
  if (fileExists(filename)) {
    return JSON.parse(fs.readFileSync(filename, {encoding: 'utf8'}));
  }

  return {};
}

export function writeJsonFile(
  filename: string,
  json: object,
  force: boolean
): void {
  if (force || !fileExists(filename)) {
    const data = `${format(JSON.stringify(json), {
      ...readJsonFile('.prettierrc'),
      parser: 'json'
    })}\n`;

    fs.writeFileSync(filename, data, {encoding: 'utf8'});

    console.log(`OK: '${filename}' file created.`);
  } else {
    throw new Error(`'${filename}' file already exists.`);
  }
}
