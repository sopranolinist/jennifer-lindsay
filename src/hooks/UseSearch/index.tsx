import { useState } from 'react';
import {
  DataFormatProps,
  DataRowProps,
  TableProps
} from '../../components/Table';

export type SearchOptions = {
  enabled: boolean;
  title: string;
};

export const useSearch = (
  data: TableProps['data'],
  dataFormat: DataFormatProps[],
  enabled: boolean
) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onRequestSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };
  const searchHandler: (e: { target: { value: string } }) => void = e => {
    onRequestSearch(e.target.value);
  };

  const searchMethod = (row: DataRowProps) => {
    if (!dataFormat.length) {
      return row;
    }
    return dataFormat
      .filter(columnDef => columnDef.searchable)
      .some(columnDef => {
        if (columnDef.field) {
          var value = row[columnDef.field];
          if (value) {
            return value
              .toString()
              .toUpperCase()
              .includes(searchTerm.toUpperCase());
          }
        }
        return false;
      });
  };

  const searchedData = (() => {
    if (!searchTerm || !enabled) return data;
    const searchedData = data.filter(searchMethod);
    return searchedData;
  })();

  return {
    searchHandler,
    searchedData,
    searchTerm
  };
};
