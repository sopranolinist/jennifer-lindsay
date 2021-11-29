import { render } from '@testing-library/react';
import React from 'react';
import { getJssWrappedComponent } from '../../helpers/TestHelper';
import { ReactComponent as Logomark } from './Logomark.svg';
import { ReactComponent as Logotype } from './Logotype.svg';

describe('Logos', () => {
  test('renders the Logomark', async done => {
    const { container } = render(getJssWrappedComponent(<Logomark />));
    expect(container).toMatchSnapshot();
    done();
  });

  test('renders the Logotype', async done => {
    const { container } = render(getJssWrappedComponent(<Logotype />));
    expect(container).toMatchSnapshot();
    done();
  });
});
