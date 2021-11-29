import {
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Variant } from '@material-ui/core/styles/createTypography';
import { TableCellProps } from '@material-ui/core/TableCell';
import { TablePaginationProps } from '@material-ui/core/TablePagination';
import get from 'lodash/get';
import React, { MouseEvent, ReactNode, useEffect, useMemo, useState } from 'react';
import { convertStringToPrimitiveValue, dateString } from '../../helpers/DataHelper';
import usePagination from '../../hooks/UsePagination';
import { SearchOptions, useSearch } from '../../hooks/UseSearch';
import { OrderOptions, useSorting } from '../../hooks/UseSorting';
import {
  FirstPageIcon,
  KeyboardArrowLeftIcon,
  KeyboardArrowRightIcon,
  LastPageIcon,
} from '../../images/Icons';
import FilterInput from '../FilterInput';
import SearchInput from '../SearchInput';
import ColLabel from './ColLabel';

export type DataFormatProps = {
  title: string;
  field: string;
  includeRowColor?: any;
  onClick?: (event: any) => void;
  render?: (rowData: any) => string | React.ReactNode;
  searchable?: boolean;
  variant?: Variant;
  width?: string | number;
};

export type DataRowProps = { [key: string]: any };

const styles = (theme: Theme) =>
  createStyles({
    table: {
      // overflowX: 'auto'
    },
    tableLayoutFixed: {
      tableLayout: 'fixed',
    },
    colorBlock: {
      display: 'inline-block',
      marginRight: theme.spacing(2),
      width: theme.spacing(2),
      height: theme.spacing(2),
    },
    tableHeader: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      flex: '1 0 auto',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    headerItem: {
      padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    headerSearchBar: {
      flexGrow: 1,
    },
    headerTitle: {
      textAlign: 'left',
    },
    headerLabel: {
      textAlign: 'left',
      color: theme.palette.primary.main,
      paddingLeft: theme.spacing(2),
    },
    hidden: {
      display: 'none',
    },
    tableRowHasHover: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
    colCanHover: {
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: '#ffffff',
        borderRadius: '4px',
      },
    },
    colCaption: {
      textAlign: 'right',
    },
    searchInput: {
      width: '100%',
    },
    filterInput: {
      width: '10%',
      justifyContent: 'flex-start',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  });

const TablePaginationStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
    },
  }),
);

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: TablePaginationProps['onPageChange'];
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const classes = TablePaginationStyles();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick: IconButtonProps['onClick'] = event => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick: IconButtonProps['onClick'] = event => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick: IconButtonProps['onClick'] = event => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick: IconButtonProps['onClick'] = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="First Page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
        {theme.direction === 'rtl' ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Next Page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Last Page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

export interface TableProps extends WithStyles<typeof styles> {
  columnLabels?: boolean;
  dataFormat: DataFormatProps[];
  data: Array<DataRowProps>;
  filterValues: any[] | null;
  headerEnabled?: boolean;
  label?: string;
  onRowClick?: (event: MouseEvent, rowData: any) => void;
  search?: SearchOptions;
  autoFilter?: any;
  searchFormat?: Array<{
    title: string;
    field: string;
    searchable?: boolean | undefined;
  }>;
  sortEnabled?: boolean;
  defaultSortOrder?: OrderOptions | undefined;
  paginationEnabled?: boolean;
  title?: string;
  theme: Theme;
  searchType: string;
}

const TableComponent = (props: TableProps) => {
  const {
    columnLabels = true,
    classes,
    dataFormat,
    data: sourceData,
    filterValues,
    headerEnabled = true,
    label,
    sortEnabled = false,
    defaultSortOrder,
    paginationEnabled = false,
    onRowClick,
    title,
    search = { enabled: false, title: 'Search' },
    autoFilter,
    theme,
    searchFormat = [],
    searchType,
  } = props;
  const [autoFilterVal, setAutoFilterVal] = useState<string>(
    autoFilter && autoFilter.default ? autoFilter.default : '',
  );
  const [filteredSourceData, setFilteredSourceData] = useState(sourceData);

  useEffect(() => {
    if (autoFilter) {
      let actualVal: boolean | string | null | undefined = autoFilterVal;
      if (autoFilter.convertStrings) {
        actualVal = convertStringToPrimitiveValue(autoFilterVal);
      }
      if (actualVal === 'any' || actualVal === undefined) {
        setFilteredSourceData(sourceData);
      } else if (autoFilter.dateField) {
        if (actualVal === true) {
          const todayString = dateString(new Date());
          setFilteredSourceData(
            sourceData.filter(row => row[autoFilter.field].toISOString() > todayString),
          );
        } else {
          setFilteredSourceData(sourceData);
        }
      } else {
        setFilteredSourceData(sourceData.filter(row => row[autoFilter.field] === actualVal));
      }
    } else {
      setFilteredSourceData(sourceData);
    }
  }, [autoFilterVal, autoFilter, sourceData]);

  const { searchHandler, searchedData, searchTerm } = useSearch(
    filteredSourceData || [],
    searchFormat,
    search.enabled,
  );
  const { createSortHandler, sortedData, order, orderId } = useSorting(
    searchedData,
    defaultSortOrder,
  );
  const defaultRowsPerPage = 10;
  const rowsPerPageOptions = useMemo(() => {
    return [defaultRowsPerPage, ...[20, 30, 50].filter(count => sortedData.length >= count)];
  }, [sortedData]);
  const {
    paginatedData,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination(sortedData, defaultRowsPerPage, searchTerm);

  const createRowClickHandler = (rowData: any) => (event: MouseEvent) => {
    if (!onRowClick) return () => {};
    onRowClick(event, rowData);
  };

  const createColClickHandler = (onColClick: any, rowData: any) => (event: MouseEvent) => {
    if (!onColClick) return () => {};
    onColClick(event, rowData);
  };

  const handleSelectChange = (e: any) => {
    setAutoFilterVal(e.target.value);
  };

  return (
    <>
      {headerEnabled && (
        <Paper>
          <Grid container justify="flex-end" alignItems="center" className={classes.tableHeader}>
            {label && label.length > 0 && (
              <Grid item className={classes.headerItem}>
                <Typography variant="subtitle1" component="h6" className={classes.headerLabel}>
                  {label}
                </Typography>
              </Grid>
            )}
            {title && title.length > 0 && (
              <Grid item className={classes.headerItem}>
                <Typography variant="h6" component="h6" className={classes.headerTitle}>
                  {title}
                </Typography>
              </Grid>
            )}
            {((search && search.enabled) || autoFilter) && (
              <Grid item className={`${classes.headerItem} ${classes.headerSearchBar}`}>
                <Grid container direction="row">
                  <Grid item xs={12} sm={autoFilter ? 8 : 12}>
                    {searchType === 'search' && (
                      <SearchInput
                        searchHandler={searchHandler}
                        title={search.title}
                        className={classes.searchInput}
                      />
                    )}
                    {searchType === 'filter' && (
                      <FilterInput
                        filterHandler={searchHandler}
                        title={search.title}
                        values={filterValues || ['']}
                        className={classes.filterInput}
                      />
                    )}
                  </Grid>
                  <Grid item xs={12} sm={search && search.enabled ? 4 : 12}>
                    {autoFilter && (
                      <FormControl>
                        <Select
                          value={autoFilterVal || ''}
                          onChange={handleSelectChange}
                          inputProps={{
                            name: 'autoFilterSelect',
                            id: 'autofilter-select',
                          }}
                          style={{ marginTop: '10px' }}
                        >
                          {autoFilter.values.map((val: string, index: number) => (
                            <MenuItem key={val} value={val}>
                              {autoFilter.labels[index]}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            )}
            {paginationEnabled && (
              <Grid item className={classes.headerItem}>
                <TablePagination
                  rowsPerPageOptions={rowsPerPageOptions}
                  colSpan={3}
                  count={sortedData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'Rows per page' },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                  component="div"
                />
              </Grid>
            )}
          </Grid>
        </Paper>
      )}
      <div className={classes.table}>
        <Table className={classes.tableLayoutFixed}>
          {columnLabels && (
            <TableHead>
              <TableRow>
                {dataFormat.map((formatRow: DataFormatProps, index) => {
                  return (
                    <ColLabel
                      key={`table-header-col-${formatRow.field}`}
                      createSortHandler={createSortHandler}
                      data={formatRow}
                      index={index}
                      orderId={orderId}
                      order={order}
                      sortEnabled={sortEnabled}
                      style={
                        formatRow.width
                          ? {
                              width: formatRow.width,
                              paddingRight: theme.spacing(3),
                            }
                          : {}
                      }
                    />
                  );
                })}
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {(paginationEnabled ? paginatedData : sortedData).map(
              (dataRow: DataRowProps, index: number) => (
                <TableRow
                  className={onRowClick ? classes.tableRowHasHover : ''}
                  key={`table-row-${index}`}
                  onClick={createRowClickHandler(dataRow)}
                  hover={!!onRowClick}
                  data-testid={`table-row-${index}`}
                >
                  {dataFormat.map((formatRow: DataFormatProps) => {
                    const key = `table-row-${index}-col-${formatRow.field}`;
                    const { render } = formatRow;
                    let value: ReactNode | string =
                      dataRow[formatRow.field] instanceof Date
                        ? `${get(dataRow, `[${formatRow.field}]`, '').getUTCMonth() + 1}/${get(
                            dataRow,
                            `[${formatRow.field}]`,
                            '',
                          ).getUTCDate()}/${get(
                            dataRow,
                            `[${formatRow.field}]`,
                            '',
                          ).getUTCFullYear()}`
                        : `${get(dataRow, `[${formatRow.field}]`, '')}`;
                    if (render) {
                      value = render(dataRow);
                    }
                    if (formatRow.includeRowColor) {
                      value = (
                        <>
                          <div
                            className={classes.colorBlock}
                            style={{
                              backgroundColor: formatRow.includeRowColor[index],
                            }}
                          />
                          {value}
                        </>
                      );
                    }
                    let props: TableCellProps = {
                      className: '',
                    };
                    if (formatRow.onClick) {
                      props = {
                        onClick: createColClickHandler(formatRow.onClick, dataRow),
                        className: `${props.className} ${classes.colCanHover}`,
                      };
                    }
                    let variant: Variant = 'subtitle1';
                    if (formatRow.variant) {
                      variant = formatRow.variant;
                      if (variant === 'caption') {
                        props = {
                          className: `${props.className} ${classes.colCaption}`,
                        };
                      }
                    }

                    if (formatRow.width) {
                      props.style = {
                        width: formatRow.width,
                        paddingRight: theme.spacing(3),
                      };
                    }

                    return (
                      <TableCell key={key} {...props}>
                        {render && value}
                        {!render && (
                          <Typography component="span" variant={variant} noWrap={false}>
                            {value}
                          </Typography>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default withStyles(styles, { withTheme: true })(TableComponent);
