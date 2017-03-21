import * as React from 'react';

export class TestComponent extends React.Component<{}, undefined> {
  public render(): JSX.Element {
    return (
      <div>{window.location}</div>
    );
  }
}
