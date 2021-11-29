import { render } from '@testing-library/react';
import React from 'react';
import {
  authExamples,
  getFullyWrappedComponent,
  getJssWrappedComponent,
  getRouterWrappedComponent,
  mockConsole
} from '../../helpers/TestHelper';
import ErrorBoundary from '../ErrorBoundary';
import NavPrimary from './';

jest.mock('@material-ui/core/useMediaQuery', () => jest.fn());

describe('Component - NavPrimary', () => {
  beforeEach(mockConsole);

  test('should enforce auth context', async done => {
    const mobileOpen = true;
    const closeDrawer = () => {};
    const { container } = render(
      getJssWrappedComponent(
        getRouterWrappedComponent(
          <ErrorBoundary>
            <NavPrimary mobileOpen={mobileOpen} closeDrawer={closeDrawer} />
          </ErrorBoundary>
        )
      )
    );
    expect(container).toMatchSnapshot();
    done();
  });

  test('renders the NavPrimary screen', async done => {
    const { authContextProps, authObjProps } = authExamples.signedInAuthorized;
    const mobileOpen = true;
    const closeDrawer = () => {};
    const { container } = render(
      getFullyWrappedComponent(
        <NavPrimary mobileOpen={mobileOpen} closeDrawer={closeDrawer} />,
        {
          authContextProps,
          authObjProps
        }
      )
    );
    expect(container).toMatchSnapshot();
    done();
  });

  test('renders empty NavPrimary screen for unauthenticated users', async done => {
    const mobileOpen = true;
    const closeDrawer = () => {};
    const { container } = render(
      getFullyWrappedComponent(
        <NavPrimary mobileOpen={mobileOpen} closeDrawer={closeDrawer} />
      )
    );
    expect(container).toMatchSnapshot();
    done();
  });
});
