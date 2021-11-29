import { render } from '@testing-library/react';
import { advanceTo, clear } from 'jest-date-mock';
import React from 'react';
import {
  authExamples,
  getFullyWrappedComponent,
  getJssWrappedComponent,
  getRouterWrappedComponent,
  mockConsole
} from '../../helpers/TestHelper';
import ErrorBoundary from '../ErrorBoundary';
import Header from './';

jest.mock('@material-ui/core/useMediaQuery', () => jest.fn());

describe('Component - Header', () => {
  beforeEach(() => {
    mockConsole();
    advanceTo(1558461651876);
  });
  afterEach(() => {
    clear();
  });

  test('should enforce auth context', async done => {
    const { container } = render(
      getJssWrappedComponent(
        getRouterWrappedComponent(
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
        )
      )
    );
    expect(container).toMatchSnapshot();
    done();
  });

  test('renders the header screen', async done => {
    const { authContextProps, authObjProps } = authExamples.signedInAuthorized;
    const { container } = render(
      getFullyWrappedComponent(<Header />, { authContextProps, authObjProps })
    );
    expect(container).toMatchSnapshot();
    done();
  });
});
