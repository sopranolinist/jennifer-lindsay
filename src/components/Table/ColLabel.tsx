import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel, {
  TableSortLabelProps
} from '@material-ui/core/TableSortLabel';
import React from 'react';
import { DataFormatProps } from '.';
import { CreateSortHandler, OrderOptions } from '../../hooks/UseSorting';
import { KeyboardArrowDownIcon } from '../../images/Icons';

const styles = () =>
  createStyles({
    caption: {
      textAlign: 'right'
    }
  });

export interface ColLabelProps extends WithStyles<typeof styles> {
  createSortHandler: CreateSortHandler;
  data: DataFormatProps;
  index: number;
  orderId: OrderOptions['orderId'];
  order: OrderOptions['order'];
  sortEnabled: boolean;
  style:
    | React.DetailedHTMLProps<
        React.StyleHTMLAttributes<HTMLStyleElement>,
        HTMLStyleElement
      >
    | object;
}

const ColLabel = (props: ColLabelProps) => {
  const {
    classes,
    createSortHandler,
    data,
    index,
    orderId,
    order,
    sortEnabled,
    style
  } = props;
  if (!data) return null;

  let onClick: TableSortLabelProps['onClick'];
  const className = data.variant === 'caption' ? classes.caption : '';

  const Subtitle = (
    <Typography component="span" variant="subtitle1">
      {data.title}
    </Typography>
  );
  if (sortEnabled) {
    onClick = createSortHandler(data.field, index);
    return (
      <TableCell style={style}>
        <TableSortLabel
          active={orderId === index}
          direction={order}
          onClick={onClick}
          IconComponent={KeyboardArrowDownIcon}
          className={className}
        >
          {Subtitle}
        </TableSortLabel>
      </TableCell>
    );
  }

  return (
    <TableCell
      key={`table-header-col-${data.field}`}
      className={className}
      style={style}
    >
      {Subtitle}
    </TableCell>
  );
};

export default withStyles(styles)(ColLabel);
