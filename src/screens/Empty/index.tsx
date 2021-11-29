import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
    </div>
  );
};
export default Empty;
