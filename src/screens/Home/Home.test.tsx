import { render } from '@testing-library/react';
import React from 'react';
import Dashboard from '.';
import { getJssWrappedComponent } from '../../helpers/TestHelper';

describe('Screen - Dashboard', () => {
  test('should render the screen', async done => {
    const { container } = render(getJssWrappedComponent(<Dashboard />));
    expect(container).toMatchSnapshot();
    done();
  });
});
