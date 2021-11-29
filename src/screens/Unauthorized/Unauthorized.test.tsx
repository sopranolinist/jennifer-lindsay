import { render } from '@testing-library/react';
import React from 'react';
import Unauthorized from '.';
import { getJssWrappedComponent } from '../../helpers/TestHelper';

describe('Screen - Unauthorized', () => {
  test('should render the screen', async done => {
    const { container } = render(getJssWrappedComponent(<Unauthorized />));
    expect(container).toMatchSnapshot();
    done();
  });
});
