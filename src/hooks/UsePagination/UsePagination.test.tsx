import { act, cleanup, render } from '@testing-library/react';
import React from 'react';
import { mockConsole } from '../../helpers/TestHelper';
import usePagination from './';

describe('Hooks - usePagination', () => {
  let paginatedData, handleChangePage, rowsPerPage, handleChangeRowsPerPage, Subscription;
  const testData123_noItemsPerPage = {
    full: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    partial0_3: [0, 1, 2],
    partial1_3: [3, 4, 5],
    partial0_4: [0, 1, 2, 3],
    partial1_4: [4, 5, 6, 7],
  };
  const testData123 = {
    ...testData123_noItemsPerPage,
    itemsPerPage: 3,
  };
  beforeEach(() => {
    mockConsole();
    paginatedData = null;
    Subscription = props => {
      const {
        paginatedData: sentPaginatedData,
        handleChangePage: sentHandleChangePage,
        handleChangeRowsPerPage: sentHandleChangeRowsPerPage,
        rowsPerPage: sentRowsPerPage,
      } = usePagination(props.full, props.itemsPerPage);
      paginatedData = sentPaginatedData;
      handleChangePage = sentHandleChangePage;
      handleChangeRowsPerPage = sentHandleChangeRowsPerPage;
      rowsPerPage = sentRowsPerPage;
      return <div />;
    };
  });
  afterEach(cleanup);
  test('usePagination - use 15 items per page initially', async done => {
    const { container } = render(<Subscription {...testData123_noItemsPerPage} />);
    expect(rowsPerPage).toEqual(15);
    done();
  });
  test('usePagination - ensure only first page of data returned initially', async done => {
    const { container } = render(<Subscription {...testData123} />);
    expect(paginatedData).toEqual(testData123.partial0_3);
    done();
  });
  test('usePagination - return second page of data with page size of 3', async done => {
    const { container } = render(<Subscription {...testData123} />);
    act(() => {
      handleChangePage({}, 1);
    });
    expect(paginatedData).toEqual(testData123.partial1_3);
    done();
  });
  test('usePagination - change data page size', async done => {
    const { container } = render(<Subscription {...testData123} />);
    act(() => {
      handleChangeRowsPerPage({ target: { value: 4 } });
    });
    expect(paginatedData).toEqual(testData123.partial0_4);
    act(() => {
      handleChangePage({}, 1);
    });
    expect(paginatedData).toEqual(testData123.partial1_4);
    done();
  });
});
