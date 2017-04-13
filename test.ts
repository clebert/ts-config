export class Test {
  public prop: string = 'foo';
}

const { prop } = new Test();

export { prop };

export const foo = undefined;
export const bar = true;

export async function test(): Promise<boolean> {
  return bar === true;
}
