import { TableSortLabelProps } from '@material-ui/core/TableSortLabel';
import { useMemo, useState } from 'react';
import { stableSort, stableSortDesc } from '../../helpers/DataHelper';

export type CreateSortHandler = (property: string, id: number) => TableSortLabelProps['onClick'];

export interface OrderOptions {
  order: 'asc' | 'desc';
  orderBy: string | null;
  orderId: number | null;
}

export interface UseSorting extends OrderOptions {
  createSortHandler: CreateSortHandler;
  sortedData: any[];
}

const defaultOrder: OrderOptions = {
  order: 'asc',
  orderBy: 'lastName',
  orderId: 0,
};

export const useSorting = (
  data: Array<{ [key: string]: any }> | null | undefined,
  defaultSortOrder: OrderOptions | undefined,
) => {
  const [orderOptions, setOrderOptions] = useState<OrderOptions>(defaultSortOrder || defaultOrder);

  const onRequestSort = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    property: OrderOptions['orderBy'],
    id: OrderOptions['orderId'],
  ) => {
    const orderBy: OrderOptions['orderBy'] = property;
    let order: OrderOptions['order'] = 'asc';
    if (orderOptions && orderOptions.orderBy === property && orderOptions.order === 'asc') {
      order = 'desc';
    }
    setOrderOptions({ order, orderBy, orderId: id });
  };

  const createSortHandler: CreateSortHandler = (property, id) => event => {
    onRequestSort(event, property, id);
  };

  const getSorting = (order: OrderOptions['order'], orderBy: OrderOptions['orderBy']) => {
    if (!orderBy) return null;
    return order === 'desc'
      ? (a: { [key: string]: any }, b: { [key: string]: any }) => stableSortDesc(a, b, orderBy)
      : (a: { [key: string]: any }, b: { [key: string]: any }) => -stableSortDesc(a, b, orderBy);
  };

  const sortedData = useMemo(() => {
    const sorting = orderOptions && getSorting(orderOptions.order, orderOptions.orderBy);
    if (!data) return [];
    if (!sorting) return data;
    return stableSort(data, sorting);
  }, [data, orderOptions]);

  return {
    sortedData,
    createSortHandler,
    ...orderOptions,
  };
};
