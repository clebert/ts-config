declare module 'json-diff' {
  function diff(current: object, next: object): object;
}

declare module 'json-diff/lib/colorize' {
  interface ColorizeOptions {
    readonly color?: boolean;
  }

  function colorize(diff: object, options?: ColorizeOptions): string;
}
