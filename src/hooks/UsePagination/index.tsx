import { TablePaginationProps } from '@material-ui/core/TablePagination';
import { useEffect, useState } from 'react';

const usePagination = (data: Array<any>, defaultRowsPerPage = 15, searchTerm: string) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [prevSearchTerm, setPrevSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm !== prevSearchTerm) {
      setPage(0);
      setPrevSearchTerm(searchTerm);
    }
  }, [searchTerm, prevSearchTerm]);

  const handleChangePage: TablePaginationProps['onChangePage'] = (event, page) => {
    setPage(page);
  };
  const handleChangeRowsPerPage: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const start = page * rowsPerPage;
  const end = page * rowsPerPage + rowsPerPage;
  const paginatedData = data.slice(start, end);

  return {
    paginatedData,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};

export default usePagination;
