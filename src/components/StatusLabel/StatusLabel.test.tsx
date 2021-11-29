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
import StatusLabel, { BoxSize } from './';

interface Props {}

describe('Component - Footer', () => {
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
            <StatusLabel status="DENIED" boxSize={BoxSize.sm} />
          </ErrorBoundary>
        )
      )
    );
    expect(container).toMatchSnapshot();
    done();
  });

  test('renders the StatusLabel components', async done => {
    const { authContextProps, authObjProps } = authExamples.signedInAuthorized;
    const { container } = render(
      getFullyWrappedComponent(
        <StatusLabel status="APPROVED" boxSize={BoxSize.md} />,
        { authContextProps, authObjProps }
      )
    );
    expect(container).toMatchSnapshot();
    done();
  });
});
