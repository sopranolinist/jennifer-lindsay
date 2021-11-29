import { matchPath } from 'react-router';
export const drawerWidth = 250;
export const isSelected = (path = '/', currentLocation: string) => {
  const match = matchPath(currentLocation, {
    path,
    exact: true,
    strict: false,
  });
  return !!(match && match.isExact);
};
