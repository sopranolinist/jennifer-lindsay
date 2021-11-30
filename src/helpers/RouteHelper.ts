import { RouteProps } from 'react-router-dom';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import Portfolio from '../screens/Portfolio';
// import OrgChart from '../screens/OrgChart';
// import Person from '../screens/Person';
// import RecruitingResidualsReport from '../screens/RecruitingResidualsReport';
// import Timeoff from '../screens/Timeoff';
import Unauthorized from '../screens/Unauthorized';

export const activeRoutes = ['home','contact'];
export const routeHome: () => string = () => '/home';
export const routeContact: () => string = () => '/contact';
export const routePortfolio: () => string = () => '/portfolio';
export const routeUnauthorized: () => string = () => '/unauthorized';
export const routeTimeoff: (
  regex: boolean,
  operation?: 'request' | 'list' | 'list-all' | 'list-own',
  rid?: string | null,
) => string = (regex, operation, rid) => {
  const exp = '/timeoff/:operation?/:rid?';

  let path =
    operation || !regex
      ? exp.replace(
          /\/:operation(\??)/,
          typeof operation === 'string' && operation.length ? `/${operation}` : '',
        )
      : exp;
  path =
    rid || !regex
      ? path.replace(/\/:rid(\??)/, typeof rid === 'string' && rid.length ? `/${rid}` : '')
      : path;
  return path;
};

export const routeOrgChart: (
  regex: boolean,
  operation?: 'view' | 'update',
  type?: 'person' | 'position' | 'title',
  uuid?: string | null,
) => string = (regex, operation, type, uuid) => {
  const exp = '/orgchart/:operation?/:type?/:uuid?';

  let path =
    operation || !regex
      ? exp.replace(
          /\/:operation(\??)/,
          typeof operation === 'string' && operation.length ? `/${operation}` : '',
        )
      : exp;
  path =
    type || !regex
      ? path.replace(/\/:type(\??)/, typeof type === 'string' && type.length ? `/${type}` : '')
      : path;
  path =
    uuid || !regex
      ? path.replace(/\/:uuid(\??)/, typeof uuid === 'string' && uuid.length ? `/${uuid}` : '')
      : path;
  return path;
};

export const routePerson: (
  regex: boolean,
  operation?: 'create' | 'list' | 'list-all',
  uuid?: string | null,
) => string = (regex, operation, uuid) => {
  const exp = '/person/:operation?/:uuid?';

  let path =
    operation || !regex
      ? exp.replace(
          /\/:operation(\??)/,
          typeof operation === 'string' && operation.length ? `/${operation}` : '',
        )
      : exp;
  path =
    uuid || !regex
      ? path.replace(/\/:uuid(\??)/, typeof uuid === 'string' && uuid.length ? `/${uuid}` : '')
      : path;
  return path;
};

export const PrivateScreenRoutes: Array<RouteProps> = [
  {
    path: routeHome(),
    component: Home,
    exact: true,
  },
  {
    path: routePortfolio(),
    component: Portfolio,
    exact: true,
  },
  {
    path: routeContact(),
    component: Contact,
    exact: true,
  },
  // {
  //   path: routePerson(true),
  //   component: Person,
  //   exact: true,
  // },
  // {
  //   path: routeTimeoff(true),
  //   component: Timeoff,
  //   exact: true,
  // },
  // {
  //   path: routeOrgChart(true),
  //   component: OrgChart,
  //   exact: true,
  // },
  // {
  //   path: routeRecruitingResidualsReport(),
  //   component: RecruitingResidualsReport,
  //   exact: true,
  // },
];

export const PublicScreenRoutes: Array<RouteProps> = [
  {
    path: routeUnauthorized(),
    component: Unauthorized,
    exact: true,
  },
];
