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
import PrivateRoute from './';

const HelloWorld = () => <span>Hello World!</span>;

describe('Component - PrivateRoute', () => {
  beforeEach(() => {
    mockConsole();
  });

  test('fails outside of Router', async done => {
    const { container } = render(
      getJssWrappedComponent(
        <ErrorBoundary>
          <PrivateRoute exact path={'/'} component={HelloWorld} />
        </ErrorBoundary>
      )
    );
    expect(container).toMatchSnapshot();
    done();
  });

  test('should enforce auth context', async done => {
    const { container } = render(
      getJssWrappedComponent(
        getRouterWrappedComponent(
          <ErrorBoundary>
            <PrivateRoute exact path={'/'} component={HelloWorld} />
          </ErrorBoundary>
        )
      )
    );
    expect(container).toMatchSnapshot();
    done();
  });

  test('renders route for authorized user', async done => {
    const { authContextProps, authObjProps } = authExamples.signedInAuthorized;
    const { container } = render(
      getFullyWrappedComponent(
        <PrivateRoute exact={true} path={'/'} component={HelloWorld} />,
        { authContextProps, authObjProps }
      )
    );
    expect(container).toMatchSnapshot();
    done();
  });

  test('renders unauthorized screen for unauthorized user', async done => {
    const {
      authContextProps,
      authObjProps
    } = authExamples.signedInUnauthorized;
    const { container } = render(
      getFullyWrappedComponent(
        <PrivateRoute exact={true} path={'/'} component={HelloWorld} />,
        { authContextProps, authObjProps }
      )
    );
    expect(container).toMatchSnapshot();
    done();
  });
});
