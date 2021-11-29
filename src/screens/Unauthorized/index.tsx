import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import DocumentTitle from 'react-document-title';
import { getPageTitle } from '../../helpers/DataHelper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(6)
    }
  })
);

const Unauthorized = () => {
  const classes = useStyles();
  const pageTitle = 'Unauthorized';
  return (
    <div className={classes.root} data-testid="screen-unauthorized">
      <DocumentTitle title={getPageTitle(pageTitle)} />
      <Typography>{`This user account is ${pageTitle} and therefore has restricted access. Please contact HR.`}</Typography>
    </div>
  );
};
export default Unauthorized;
