import theme from './materialUi';

describe('Theme - Material UI', () => {
  it('exports and object', () => {
    expect(theme).toMatchSnapshot();
  });
});
