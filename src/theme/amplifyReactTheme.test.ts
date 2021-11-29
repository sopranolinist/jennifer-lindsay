import theme from './amplifyReactTheme';

describe('Theme - Amplify React', () => {
  it('exports and object', () => {
    expect(theme).toMatchSnapshot();
  });
});
