import React, { createContext } from 'react';

export interface LayoutContextExports {
  rightDrawerOpen: boolean;
  setRightDrawerOpen: React.Dispatch<any>;
}

const LayoutContext = createContext<LayoutContextExports | undefined>(
  undefined
);
const { Provider, Consumer } = LayoutContext;

export {
  Provider as LayoutProvider,
  Consumer as LayoutConsumer,
  LayoutContext
};
