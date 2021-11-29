import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import classnames from 'classnames';
import React from 'react';
import { palette } from '../../theme/materialUi';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    smStatusBox: {
      width: '90px',
      height: '30px',
      padding: '5px 5px',
      borderRadius: '8px',
      display: 'block',
      textAlign: 'center',
      fontWeight: 600
    },
    mdStatusBox: {
      width: '100px',
      height: '30px',
      padding: '5px 10px',
      borderRadius: '8px',
      display: 'block',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    lgStatusBox: {
      width: '140px',
      height: '40px',
      padding: '5px 10px',
      borderRadius: '8px',
      display: 'block',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    statusApproved: {
      backgroundColor: palette.status.approved
    },
    statusDenied: {
      backgroundColor: palette.status.denied
    },
    statusPending: {
      backgroundColor: palette.status.pending
    },
    statusCancelled: {
      backgroundColor: palette.status.cancelled
    }
  })
);

export enum BoxSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

interface StatusLabelProps {
  status: string;
  boxSize: BoxSize;
}

const StatusLabel = (props: StatusLabelProps) => {
  const { status, boxSize } = props;
  const classes = useStyles();

  return (
    <span
      className={classnames(
        boxSize === 'sm'
          ? classes.smStatusBox
          : boxSize === 'md'
            ? classes.mdStatusBox
            : classes.lgStatusBox,
        status === 'APPROVED'
          ? classes.statusApproved
          : status === 'DENIED'
            ? classes.statusDenied
            : status === 'CANCELLED'
              ? classes.statusCancelled
              : classes.statusPending
      )}
    >
      {status}
    </span>
  );
};

export default StatusLabel;
