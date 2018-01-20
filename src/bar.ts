import {Foo} from './Foo';

const {prop} = new Foo();

export {prop};

export const foo = undefined;

export async function bar(): Promise<boolean> {
  return foo === true;
}
