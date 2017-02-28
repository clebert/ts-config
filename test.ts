export class Test {
  public prop: string = 'foo';
}

export async function test(): Promise<void> {
  return;
}

const { prop } = new Test();

export { prop };
