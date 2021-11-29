import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Unauthorized from '../../screens/Unauthorized';

interface Props extends RouteProps {}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ component, ...rest }: Props) => {
const isAuthorized = true;
  return (
    <Route
      {...rest}
      component={isAuthorized ? component : () => <Unauthorized />}
    />
  );
};
