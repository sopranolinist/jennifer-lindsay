export const testHelper = () => {
  return null;
}
// import 'jest-axe/extend-expect';
// import 'jest-dom/extend-expect';
// import { GenerateId } from 'jss';
// import get from 'lodash/get';
// import React, { ReactChild, ReactElement } from 'react';
// import { MockedProvider, MockedResponse } from 'react-apollo/test-utils';
// import JssProvider from 'react-jss/lib/JssProvider';
// import { MemoryRouter as Router } from 'react-router-dom';
// import * as API from '../API';
// import { AuthProvider, AuthProviderProps, fallbackAuthContextCalls } from '../hooks/AuthContext';
// import { LayoutContextExports, LayoutProvider } from '../hooks/LayoutContext';

// const generateClassName: GenerateId = (rule: any, styleSheet) =>
//   `${get(styleSheet, 'options.classNamePrefix')}-${rule.className}`;

// export const getJssWrappedComponent = (children: ReactChild) => (
//   <JssProvider generateClassName={generateClassName}>{children}</JssProvider>
// );

// export const getRouterWrappedComponent = (children: ReactElement, initialRoute = '/') => (
//   <Router initialEntries={[initialRoute]}>{children}</Router>
// );

// export const getApolloWrappedComponent = (
//   children: ReactElement,
//   apolloMocks?: readonly MockedResponse[] | undefined,
// ) => (
//   <MockedProvider mocks={mocks} addTypename={false}>
//     {children}
//   </MockedProvider>
// );

// export const getAuthContextWrappedComponent = (
//   children: ReactElement,
//   props: AuthProviderProps = { client: undefined },
//   authObjProps?: any,
// ) => {
//   let authProps = {
//     // ...fallbackAuthContextCalls,
//     ...props,
//   };
//   if (authObjProps) {
//     authProps = {
//       ...authProps,
//       defaultAuthObj: {
//         ...fallbackAuthContextCalls.defaultAuthObj,
//         ...authProps.defaultAuthObj,
//         ...authObjProps,
//       },
//     };
//   }
//   return <AuthProvider {...authProps}>{children}</AuthProvider>;
// };

// const LayoutContextDefaultExports: LayoutContextExports = {
//   rightDrawerOpen: false,
//   setRightDrawerOpen: jest.fn(),
// };
// export const getLayoutWrappedComponent = (
//   children: ReactElement,
//   contextValues: Partial<LayoutContextExports> = {},
// ) => (
//   <LayoutProvider value={{ ...LayoutContextDefaultExports, ...contextValues }}>
//     {children}
//   </LayoutProvider>
// );

// type OverridesProp = {
//   authContextProps?: AuthProviderProps;
//   authObjProps?: any;
//   layoutContextValues?: Partial<LayoutContextExports>;
//   initialRoute?: string;
//   apolloMocks?: any; // readonly MockedResponse[] | undefined;
// };
// export const getFullyWrappedComponent = (children: ReactElement, overrides?: OverridesProp) => {
//   let authContextProps: AuthProviderProps | undefined;
//   let authObjProps: any;
//   let layoutContextValues: Partial<LayoutContextExports> | undefined;
//   let initialRoute: string | undefined;
//   let apolloMocks: any; // readonly MockedResponse[] | undefined;
//   if (overrides) {
//     authContextProps = get(overrides, 'authContextProps', {
//       client: undefined,
//     });
//     authObjProps = get(overrides, 'authObjProps');
//     layoutContextValues = get(overrides, 'layoutContextValues', {});
//     initialRoute = get(overrides, 'initialRoute', '');
//   }
//   return getJssWrappedComponent(
//     getApolloWrappedComponent(
//       getRouterWrappedComponent(
//         getAuthContextWrappedComponent(
//           getLayoutWrappedComponent(children, layoutContextValues),
//           authContextProps,
//           authObjProps,
//         ),
//         initialRoute,
//       ),
//       apolloMocks,
//     ),
//   );
// };

// export const mockConsole = () => {
//   jest.spyOn(global.console, 'error').mockImplementation(() => {});
// };

// export const authExamples = {
//   signedOut: {
//     authObjProps: {
//       currentAuthenticatedUser: () => {
//         return Promise.reject(new Error('not authenticated'));
//       },
//     },
//     authContextProps: {
//       client: undefined,
//       defaultSignedIn: false,
//       defaultIsAuthorized: false,
//     },
//   },
//   signedInAuthorized: {
//     authObjProps: {
//       currentAuthenticatedUser: () => {
//         return Promise.resolve({
//           attributes: {
//             email: 'jen.lindsay@dws.la',
//             identities: [],
//             sub: '87f05f4d-479b-4817-b6a7-63b75eb50c9b',
//           },
//         });
//       },
//     },
//     authContextProps: {
//       client: undefined,
//       defaultSignedIn: true,
//       defaultIsAuthorized: true,
//     },
//   },
//   signedInUnauthorized: {
//     authObjProps: {
//       currentAuthenticatedUser: () => {
//         return Promise.resolve({
//           attributes: {
//             email: 'dhq.unauthorized@dws.la',
//             identities: [],
//             sub: '87f05f4d-479b-4817-b6a7-63b75eb50c9b',
//           },
//         });
//       },
//     },
//     authContextProps: {
//       client: undefined,
//       defaultSignedIn: true,
//       defaultIsAuthorized: false,
//     },
//   },
//   signedInAuthorizedEmp: {
//     authObjProps: {
//       currentAuthenticatedUser: () => {
//         return Promise.resolve({
//           attributes: {
//             email: 'dhq.employee@dws.la',
//             identities:
//               '[{"userId":"117892860558610669905","providerName":"Google","providerType":"Google","issuer":null,"primary":true,"dateCreated":1565669081099}]',
//             sub: 'e01a0c43-e96a-43f1-887c-8c4e393e134a',
//           },
//         });
//       },
//     },
//     authContextProps: {
//       client: undefined,
//       defaultSignedIn: true,
//       defaultIsAuthorized: true,
//       defaultPersonInfo: {
//         firstName: 'DHQ',
//         lastName: 'EMPLOYEE',
//         workEmail: 'dhq.employee@dws.la',
//         personalEmail: 'dhq.employee@gmail.com',
//         role: API.Persona.EMPLOYEE,
//       },
//     },
//   },
//   signedInAuthorizedContr: {
//     authObjProps: {
//       currentAuthenticatedUser: () => {
//         return Promise.resolve({
//           attributes: {
//             email: 'dhq.contractor@dws.la',
//             identities:
//               '[{"userId":"100487814204179213154","providerName":"Google","providerType":"Google","issuer":null,"primary":true,"dateCreated":1565669312635}]',
//             sub: '6b736166-4965-4f1d-afbb-80f95be84e64',
//           },
//         });
//       },
//     },
//     authContextProps: {
//       client: undefined,
//       defaultSignedIn: true,
//       defaultIsAuthorized: true,
//       defaultPersonInfo: {
//         firstName: 'DHQ',
//         lastName: 'CONTRACTOR',
//         workEmail: 'dhq.contractor@dws.la',
//         personalEmail: 'dhq.contractor@gmail.com',
//         role: API.Persona.CONTRACTOR,
//       },
//     },
//   },
//   signedInAuthorizedExec: {
//     authObjProps: {
//       currentAuthenticatedUser: () => {
//         return Promise.resolve({
//           attributes: {
//             email: 'dhq.executive@dws.la',
//             identities:
//               '[{"userId":"107559465961084856432","providerName":"Google","providerType":"Google","issuer":null,"primary":true,"dateCreated":1565669434520}]',
//             sub: '94616d74-f916-48d7-af06-90a3c2e694da',
//           },
//         });
//       },
//     },
//     authContextProps: {
//       client: undefined,
//       defaultSignedIn: true,
//       defaultIsAuthorized: true,
//       defaultPersonInfo: {
//         firstName: 'DHQ',
//         lastName: 'EXECUTIVE',
//         workEmail: 'dhq.executive@dws.la',
//         personalEmail: 'dhq.executive@gmail.com',
//         role: API.Persona.EXECUTIVE,
//       },
//     },
//   },
//   signedInAuthorizedProjMgr: {
//     authObjProps: {
//       currentAuthenticatedUser: () => {
//         return Promise.resolve({
//           attributes: {
//             email: 'dhq.project_manager@dws.la',
//             identities:
//               '[{"userId":"117019102970691830566","providerName":"Google","providerType":"Google","issuer":null,"primary":true,"dateCreated":1565669554053}]',
//             sub: '9194a067-1d37-406d-a1d2-2505eb4072b4',
//           },
//         });
//       },
//     },
//     authContextProps: {
//       client: undefined,
//       defaultSignedIn: true,
//       defaultIsAuthorized: true,
//       defaultPersonInfo: {
//         firstName: 'DHQ',
//         lastName: 'PROJECT_MANAGER',
//         workEmail: 'dhq.project_manager@dws.la',
//         personalEmail: 'dhq.project_manager@gmail.com',
//         role: API.Persona.PROJECT_MANAGER,
//       },
//     },
//   },
//   signedInAuthorizedOpsMgr: {
//     authObjProps: {
//       currentAuthenticatedUser: () => {
//         return Promise.resolve({
//           attributes: {
//             email: 'dhq.operations_manager@dws.la',
//             identities:
//               '[{"userId":"113701768640542213333","providerName":"Google","providerType":"Google","issuer":null,"primary":true,"dateCreated":1564431139511}]',
//             sub: 'f9755b9f-b4ab-403c-964d-f1062f121eed',
//           },
//         });
//       },
//     },
//     authContextProps: {
//       client: undefined,
//       defaultSignedIn: true,
//       defaultIsAuthorized: true,
//       defaultPersonInfo: {
//         firstName: 'DHQ',
//         lastName: 'OPERATIONS_MANAGER',
//         workEmail: 'dhq.operations_manager@dws.la',
//         personalEmail: 'dhq.operations_manager@gmail.com',
//         role: API.Persona.OPERATIONS_MANAGER,
//       },
//     },
//   },
//   signedInAuthorizedEmpWithId: {
//     // for tests w/ queries that require an id (non-admin version)
//     authObjProps: {
//       currentAuthenticatedUser: () => {
//         return Promise.resolve({
//           attributes: {
//             email: 'dhq.employee@dws.la',
//             identities:
//               '[{"userId":"117892860558610669905","providerName":"Google","providerType":"Google","issuer":null,"primary":true,"dateCreated":1565669081099}]',
//             sub: 'e01a0c43-e96a-43f1-887c-8c4e393e134a',
//           },
//         });
//       },
//     },
//     authContextProps: {
//       client: undefined,
//       defaultSignedIn: true,
//       defaultIsAuthorized: true,
//       defaultPersonInfo: {
//         firstName: 'DHQ',
//         lastName: 'EMPLOYEE',
//         workEmail: 'dhq.employee@dws.la',
//         personalEmail: 'dhq.employee@gmail.com',
//         id: 'd6d78f20-0d7f-4c1c-9ba8-c7b745be8ac1',
//       },
//     },
//   },
//   signedInAuthorizedExecWithId: {
//     // for tests w/ queries that require an id (admin version)
//     authObjProps: {
//       currentAuthenticatedUser: () => {
//         return Promise.resolve({
//           attributes: {
//             email: 'dhq.executive@dws.la',
//             identities:
//               '[{"userId":"107559465961084856432","providerName":"Google","providerType":"Google","issuer":null,"primary":true,"dateCreated":1565669434520}]',
//             sub: '94616d74-f916-48d7-af06-90a3c2e694da',
//           },
//         });
//       },
//     },
//     authContextProps: {
//       client: undefined,
//       defaultSignedIn: true,
//       defaultIsAuthorized: true,
//       defaultPersonInfo: {
//         firstName: 'DHQ',
//         lastName: 'EXECUTIVE',
//         workEmail: 'dhq.executive@dws.la',
//         personalEmail: 'dhq.executive@gmail.com',
//         id: '899b0c6e-b9c2-446a-bf0c-bcc8b7434d20',
//       },
//     },
//   },
// };
