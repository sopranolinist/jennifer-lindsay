import LinearProgress from '@material-ui/core/LinearProgress';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import classnames from 'classnames';
import React, { Suspense, useState } from 'react';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import { drawerWidth } from './helpers/NavHelper';
import { PrivateScreenRoutes, PublicScreenRoutes } from './helpers/RouteHelper';
import { LayoutProvider } from './hooks/LayoutContext';
import Empty from './screens/Empty';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    App: {
      textAlign: 'center',
    },
    Site: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    SiteContent: {
      flex: '1 0 auto',
      width: '100%',
      '&::after': {
        content: "' '",
        display: 'block',
        height: 0,
        visibility: 'hidden',
      },
    },
    headerContent: {
      display: 'flex',
    },
    mainContent: {
      flexGrow: 1,
      [theme.breakpoints.up('xl')]: {
        marginLeft: drawerWidth,
      },
    },
    // toolbar: theme.mixins.toolbar,
    hasRightDrawer: {
      [theme.breakpoints.up('md')]: {
        paddingRight: drawerWidth,
      },
    },
    signIn: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justify: 'center',
      padding: theme.spacing(6),
    },
    logomarkWrapper: {
      width: 100,
      paddingTop: 3,
    },
  }),
);

const App = ({ history, location }: RouteComponentProps) => {
  // const [processing, setProcessing] = useState<boolean>(false);
  const classes = useStyles();
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  // if (processing) {
  //   return <LinearProgress />;
  // }

  return (
    <LayoutProvider value={{ rightDrawerOpen, setRightDrawerOpen }}>
      <ErrorBoundary>
        <div
          className={classnames(classes.App, classes.Site, {
            [classes.hasRightDrawer]: rightDrawerOpen,
          })}
        >
          <div className={classes.SiteContent}>
            <header className={classes.headerContent}>
              <Header />
            </header>
            <Suspense fallback={<LinearProgress />}>
              <div role="main" className={classes.mainContent}>
                <Switch>
                  <Redirect exact path="/" to="/home" />
                  {localStorage.getItem('deepLink') ? (
                    <Redirect exact path="/login" to={`${localStorage.getItem('deepLink')}`} />
                  ) : (
                    <Redirect exact path="/login" to="/home" />
                  )}
                  {PrivateScreenRoutes.map((props, index) => (
                    <PrivateRoute {...props} key={index} />
                  ))}
                  {PublicScreenRoutes.map((props, index) => (
                    <Route {...props} key={index} />
                  ))}
                  <Route component={Empty} />
                </Switch>
              </div>
            </Suspense>
          </div>
          <div role="contentinfo">
            <Footer />
          </div>
        </div>
      </ErrorBoundary>
    </LayoutProvider>
  );
};

export default withRouter(App);
