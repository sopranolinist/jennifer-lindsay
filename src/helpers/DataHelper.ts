import get from 'lodash/get';
// import { DataValue } from 'react-apollo';
// import * as API from '../API';

export const NO_SUPERVISOR = 'NO SUPERVISOR';
export const CONTRACTOR_PTO_BALANCE = 0;

export enum testAccounts {
  EXECUTIVE = 'dhq.executive@dws.la',
  OPERATIONS_MANAGER = 'dhq.operations_manager@dws.la',
  PROJECT_MANAGER = 'dhq.project_manager@dws.la',
  EMPLOYEE = 'dhq.employee@dws.la',
  CONTRACTOR = 'dhq.contractor@dws.la',
}

export const isTestAccount = (workEmail: string | undefined) => {
  return (
    workEmail === testAccounts.EXECUTIVE ||
    workEmail === testAccounts.OPERATIONS_MANAGER ||
    workEmail === testAccounts.PROJECT_MANAGER ||
    workEmail === testAccounts.EMPLOYEE ||
    workEmail === testAccounts.CONTRACTOR
  );
};

export enum actionChoices {
  ADD = 'Add',
  EDIT = 'Edit',
  NONE = '',
}

export enum objectChoices {
  PERSON = 'Person',
  POSITION = 'Position',
  TITLE = 'Title',
  NONE = '',
}

export enum formResources {
  POSITION = 'position',
  TITLE = 'title',
  PERSON = 'person',
}

export enum formModes {
  UPDATE = 'update',
  CREATE = 'create',
}

// export type PersonItem = NonNullable<
//   NonNullable<API.ListPersonsQuery['listPersons']>['items']
// >[number];

// export type PositionItem = NonNullable<
//   NonNullable<API.ListPositionsQuery['listPositions']>['items']
// >[number];

// export type TitleItem = NonNullable<
//   NonNullable<API.ListTitlesQuery['listTitles']>['items']
// >[number];

export const formatFormDate = (date: string): string => {
  return date.length > 0 ? `${date.substr(6, 4)}-${date.substr(0, 2)}-${date.substr(3, 2)}` : '';
};

export const dateRangeOverlap = (
  startDate1: Date,
  endDate1: Date,
  startDate2: Date,
  endDate2: Date,
): boolean => {
  return (
    (startDate1 >= startDate2 && startDate1 <= endDate2) ||
    (endDate1 >= startDate2 && endDate1 <= endDate2) ||
    (startDate1 <= startDate2 && endDate1 >= endDate2)
  );
};

export const dateString = (date: Date): string => {
  const today = new Date(`${date.toISOString().substr(0, 10)}T00:00:00.000Z`);
  return today.toISOString();
};

// export const requestIsOpen = (item: API.CreateTimeoffInput | null) => {
//   // Open := PENDING or APPROVED, Closed := CANCELLED or DENIED (or other invalid status value)
//   return item?.currentStatus === 'PENDING' || item?.currentStatus === 'APPROVED';
// };

export const convertBoolToString = (input: boolean | null): string => {
  // eslint-disable-next-line no-nested-ternary
  return input === true ? 'true' : input === false ? 'false' : '';
};

export const convertStringToBool = (input: string): boolean | null => {
  // eslint-disable-next-line no-nested-ternary
  return input === 'true' ? true : input === 'false' ? false : null;
};

// export const calcPersonInitialState = (
//   person: PersonItem,
//   positions: PositionItem[],
//   id: string,
// ): any => {
//   return {
//     firstName: get(person, 'firstName', ''),
//     lastName: get(person, 'lastName', ''),
//     workEmail: get(person, 'workEmail', ''),
//     personalEmail: get(person, 'personalEmail', ''),
//     role: get(person, 'role'),
//     active: convertBoolToString(get(person, 'active', null)),
//     billable: convertBoolToString(get(person, 'billable', null)),
//     position: positions.find((position: PositionItem) => get(position, 'person.id') === id),
//     birthdate: get(person, 'birthdate', ''),
//     address: get(person, 'address', ''),
//     city: get(person, 'city', ''),
//     state: get(person, 'state', ''),
//     zip: get(person, 'zip', ''),
//     phone: get(person, 'phone', ''),
//     emergencyContactName: get(person, 'emergencyContactName', ''),
//     emergencyContactEmail: get(person, 'emergencyContactEmail', ''),
//     emergencyContactPhone: get(person, 'emergencyContactPhone', ''),
//     emergencyContactRelation: get(person, 'emergencyContactRelation', ''),
//     startDate: get(person, 'startDate', ''),
//     endDate: get(person, 'endDate', ''),
//     hourlyRate: get(person, 'hourlyRate', ''),
//     id,
//   };
// };

export const formatTitle = (title: any): string => `${get(title, 'name', 'TBD')}`;

export const formatPerson = (person: any): string =>
  `${get(person, 'lastName')}, ${get(person, 'firstName')}`;

export const formatPosition = (position: any): string => {
  const person = position.person ? formatPerson(position.person) : `TBD`;
  const title = get(position, 'title.name', 'TBD');
  const supervisorPerson = get(position, 'directSupervisor.person')
    ? formatPerson(position.directSupervisor.person)
    : `N/A`;

  const supervisorTitle = get(position, 'directSupervisor.title.name', 'TBD');
  const supervisor = get(position, 'directSupervisor.person')
    ? `${supervisorTitle} (${supervisorPerson})`
    : 'N/A';
  return `${title} (${person}) - Supervisor: ${supervisor}`;
};

// export const getPositions = (
//   dataListPositions: DataValue<API.ListPositionsQuery, API.ListPositionsQueryVariables>,
// ): any[] => {
//   return dataListPositions &&
//     dataListPositions.listPositions &&
//     dataListPositions.listPositions.items
//     ? dataListPositions.listPositions.items.sort((a: any, b: any) => {
//         if (a.title && a.title.name && b.title && b.title.name) {
//           return a.title.name < b.title.name ? -1 : a.title.name > b.title.name ? 1 : 0;
//         }
//         return 0;
//       })
//     : [];
// };

// export const getTitleItems = (
//   dataListTitles: DataValue<API.ListTitlesQuery, API.ListTitlesQueryVariables>,
// ): any[] => {
//   return dataListTitles && dataListTitles.listTitles && dataListTitles.listTitles.items
//     ? dataListTitles.listTitles.items.sort((a: any, b: any) => {
//         return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
//       })
//     : [];
// };

// export const getTitleNames = (titleItems: TitleItem[]): string[] => {
//   return titleItems
//     ? titleItems
//         .map((item: TitleItem) => {
//           return item && item.name ? item.name : '';
//         })
//         .filter((item: string) => item.length > 0)
//         .sort()
//     : [];
// };

// export const getDirectSupervisors = (
//   dataListPersons: DataValue<API.ListPersonsQuery, {}>,
// ): any[] => {
//   const dsItems =
//     dataListPersons && dataListPersons.listPersons && dataListPersons.listPersons.items
//       ? dataListPersons.listPersons.items
//       : [];

//   return dsItems
//     .map((item: any) => {
//       return { id: item.id, name: `${item.lastName}, ${item.firstName}` };
//     })
//     .sort((a: any, b: any) => {
//       return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
//     })
//     .concat({ id: '', name: NO_SUPERVISOR });
// };

// export const getDirectSupervisorId = (
//   dataListPositions: DataValue<API.ListPositionsQuery, {}>,
//   directSupervisors: any[],
//   directSupervisor: string,
// ): string => {
//   const positionItems =
//     dataListPositions && dataListPositions.listPositions && dataListPositions.listPositions.items;
//   const directSupervisorObj = directSupervisors.find(item => item.name === directSupervisor);
//   const directSupervisorObjId = directSupervisorObj ? directSupervisorObj.id : '';
//   const directSupervisorItem =
//     positionItems &&
//     positionItems.find((item: any) => item && item.person && item.person.id === directSupervisorObjId);
//   return directSupervisorItem ? directSupervisorItem.id : '';
// };

export const getPageTitle = (title: string): string => `${title} | Diamond HQ`;

// export const getPersona = (role: string | null | undefined): API.Persona | null => {
//   switch (role) {
//     case 'EMPLOYEE':
//       return API.Persona.EMPLOYEE;
//     case 'CONTRACTOR':
//       return API.Persona.CONTRACTOR;
//     case 'PROJECT_MANAGER':
//       return API.Persona.PROJECT_MANAGER;
//     case 'OPERATIONS_MANAGER':
//       return API.Persona.OPERATIONS_MANAGER;
//     case 'EXECUTIVE':
//       return API.Persona.EXECUTIVE;
//     default:
//       return null;
//   }
// };

// export const isAdmin = (role: string | null): boolean => {
//   const adminRoles: (API.Persona | null)[] = [
//     API.Persona.EXECUTIVE,
//     API.Persona.OPERATIONS_MANAGER,
//     API.Persona.PROJECT_MANAGER,
//   ];
//   if (!adminRoles.includes(getPersona(role))) {
//     return false;
//   }
//   return true;
// };

export enum TimeoffStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  DENIED = 'DENIED',
  CANCELLED = 'CANCELLED',
}

// export const getTimeoffStatus = (
//   statusArray: (API.StatusInput | null)[] | null | undefined,
//   approversArray: (string | null)[] | null | undefined,
// ): TimeoffStatus | undefined => {
//   if (!statusArray || !approversArray) return TimeoffStatus.PENDING;
//   if (statusArray.findIndex(status => status && status.approved === false) > -1)
//     return TimeoffStatus.DENIED;
//   if (statusArray.length < approversArray.length) return TimeoffStatus.PENDING;
//   if (statusArray.length === approversArray.length) return TimeoffStatus.APPROVED;
//   return undefined;
// };

// export const calcCurrentPtoBalance = (
//   items: Array<API.CreateTimeoffInput | null> | null | undefined,
//   trinetPtoBalance: number | null | undefined,
//   firstDateToCompare: Date,
//   lastDateToCompare: Date,
//   allowPending: boolean,
// ): number => {
//   return (
//     items
//       ?.filter(
//         item =>
//           (allowPending ? requestIsOpen(item) : item?.currentStatus === 'APPROVED') &&
//           item?.dateRange &&
//           dateRangeOverlap(
//             new Date(item.dateRange[0].date),
//             new Date(item.dateRange[item.dateRange.length - 1].date),
//             firstDateToCompare,
//             lastDateToCompare,
//           ),
//       )
//       .reduce((balance, item) => {
//         const hrsOfOverlap =
//           item?.dateRange?.reduce((hrs: any, entry: any) => {
//             if (
//               entry.date >= firstDateToCompare.toISOString() &&
//               entry.date <= lastDateToCompare.toISOString()
//             ) {
//               return hrs + 8;
//             }
//             return hrs;
//           }, 0) || 0;
//         return balance - hrsOfOverlap;
//       }, trinetPtoBalance || 0) ||
//     trinetPtoBalance ||
//     0
//   );
// };

export const stableSortDesc = (
  a: { [key: string]: any },
  b: { [key: string]: any },
  orderBy: string,
): number => {
  const aOrderBy = typeof a[orderBy] === 'string' ? a[orderBy].toLowerCase() : a[orderBy];
  const bOrderBy = typeof b[orderBy] === 'string' ? b[orderBy].toLowerCase() : b[orderBy];
  if (!bOrderBy && aOrderBy) return 1;
  if (bOrderBy && !aOrderBy) return -1;
  if (bOrderBy < aOrderBy) {
    return -1;
  }
  if (bOrderBy > aOrderBy) {
    return 1;
  }
  return 0;
};

export const stableSort = (array: any[], cmp: (a: object, b: object) => number): any => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

export const states = [
  'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

// export const transformPersonValue = (
//   value: any,
//   key: string,
// ): API.Persona | string | boolean | null => {
//   switch (key) {
//     case 'role':
//       return getPersona(value);
//     case 'active':
//     case 'billable':
//       return value === 'true' ? true : value === 'false' ? false : null;
//     case 'workEmail':
//       return value.toLowerCase();
//     case 'directSupervisor':
//       return value.id;
//     case 'birthdate':
//       return value ? formatFormDate(value) : null;
//     default:
//       return typeof value === 'string' && value === '' ? null : value;
//   }
// };

export const convertStringToPrimitiveValue = (val: string): boolean | null | undefined => {
  return val === 'true' ? true : val === 'false' ? false : val === 'null' ? null : undefined;
};
