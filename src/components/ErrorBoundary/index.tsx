import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Component, ReactChild } from 'react';
import DocumentTitle from 'react-document-title';
import { getPageTitle } from '../../helpers/DataHelper';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      alignItems: 'baseline',
      padding: theme.spacing(3),
      paddingTop: theme.spacing(12),
      flexGrow: 1,
      flexDirection: 'column',
      display: 'flex',
      textAlign: 'left'
    },
    errorHeader: {
      color: theme.palette.error['main'],
      marginBottom: theme.spacing(2)
    },
    errorMessage: {
      marginBottom: theme.spacing(2)
    }
  });

interface Props extends WithStyles<typeof styles> {
  children?: ReactChild;
  hasError?: string;
}
interface State {
  error: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error: Error | null) {
    return { error: true };
  }

  componentDidCatch(error: Error | null, info: object) {
    // console.log('ErrorBoundary.componentDidCatch', error, info);
  }

  render() {
    const pageTitle = 'Error';
    const { error } = this.state;
    const { children, hasError, classes } = this.props;
    if (!error && !hasError) return children;
    return (
      <div className={classes.root}>
        <DocumentTitle title={getPageTitle(pageTitle)} />
        <Typography component="h1" variant="h6" className={classes.errorHeader}>
          Error
        </Typography>
        <Typography
          component="span"
          variant="body1"
          className={classes.errorMessage}
        >
          The site has encountered an error{hasError && ':'}
        </Typography>
        {hasError && (
          <Typography
            component="span"
            variant="body1"
            className={classes.errorMessage}
          >
            {hasError}
          </Typography>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ErrorBoundary);
