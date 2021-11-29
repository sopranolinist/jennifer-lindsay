import { render } from '@testing-library/react';
import React from 'react';
import { getJssWrappedComponent, mockConsole } from '../../helpers/TestHelper';
import ErrorBoundary from './';

describe('Component - ErrorBoundary', () => {
  beforeEach(() => {
    mockConsole();
  });
  it('Renders ErrorBoundary Fallback if error', () => {
    const ErrorComponent = () => {
      throw new Error('Errored!');
    };
    const component = (
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });

  it('Renders Component if no error', () => {
    const component = (
      <ErrorBoundary>
        <div />
      </ErrorBoundary>
    );
    const { container } = render(getJssWrappedComponent(component));
    expect(container).toMatchSnapshot();
  });
});
