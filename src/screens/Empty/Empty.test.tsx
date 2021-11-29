import { render } from '@testing-library/react';
import React from 'react';
import { getJssWrappedComponent } from '../../helpers/TestHelper';
import Empty from './';

describe('Screen - Empty', () => {
  test('should render the temporary "empty" screen', async done => {
    const { container } = render(getJssWrappedComponent(<Empty />));
    expect(container).toMatchSnapshot();
    done();
  });
});
