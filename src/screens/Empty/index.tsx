import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import DocumentTitle from 'react-document-title';
import { getPageTitle } from '../../helpers/DataHelper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  })
);

const Empty = () => {
  const classes = useStyles();
  const pageTitle = 'Empty';
  return (
    <div className={classes.root} data-testid="screen-empty">
      <DocumentTitle title={getPageTitle(pageTitle)} />
      <Typography variant="h2" gutterBottom component="div">404</Typography> 
      <Typography variant="body1" gutterBottom component="div">Nothing to see here, move along.</Typography> 
    </div>
  );
};
export default Empty;
