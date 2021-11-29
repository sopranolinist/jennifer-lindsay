import React, { useContext, useMemo } from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { render, act } from '@testing-library/react';
import { LayoutProvider, LayoutContext, LayoutContextExports } from './';

describe('Hooks - LayoutContext', () => {
  let Subscription: React.FC | undefined,
    rightDrawerOpen: LayoutContextExports['rightDrawerOpen'] | undefined,
    setRightDrawerOpen: LayoutContextExports['setRightDrawerOpen'] | undefined;

  beforeEach(() => {
    rightDrawerOpen = undefined;
    setRightDrawerOpen = undefined;

    Subscription = () => {
      const context = useContext(LayoutContext);
      if (!context) return null;
      rightDrawerOpen = context.rightDrawerOpen;
      setRightDrawerOpen = context.setRightDrawerOpen;
      return <div />;
    };
  });

  test('layout context values available from within Provider', async done => {
    const props = {
      rightDrawerOpen: false,
      setRightDrawerOpen: jest.fn(decision => {
        rightDrawerOpen = decision;
      })
    };
    render(
      <Router initialEntries={['/']}>
        <LayoutProvider value={props}>
          <div>{Subscription && <Subscription />}</div>
        </LayoutProvider>
      </Router>
    );
    expect(rightDrawerOpen).toEqual(props.rightDrawerOpen);
    act(() => {
      props.setRightDrawerOpen(!props.rightDrawerOpen);
    });
    expect(setRightDrawerOpen.mock.calls).toEqual([[true]]);
    expect(rightDrawerOpen).toEqual(!props.rightDrawerOpen);
    done();
  });

  test('layout context values unavailable outside Provider', async done => {
    const props = {
      rightDrawerOpen: false,
      setRightDrawerOpen: jest.fn()
    };
    render(
      <Router initialEntries={['/']}>
        <LayoutProvider value={props} />
        <div>{Subscription && <Subscription />}</div>
      </Router>
    );
    expect(rightDrawerOpen).toBeUndefined();
    act(() => {
      props.setRightDrawerOpen(!props.rightDrawerOpen);
    });
    expect(rightDrawerOpen).toBeUndefined();
    done();
  });
});
