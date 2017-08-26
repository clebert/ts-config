import {Foo} from './foo';

const {prop} = new Foo();

export {prop};

export const foo = undefined;

export async function bar(): Promise<boolean> {
  return foo === true;
}
