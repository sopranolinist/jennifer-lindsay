import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { format } from 'date-fns';
import React from 'react';
import { drawerWidth } from '../../helpers/NavHelper';
import {
  routeHome,
  routeContact,
} from '../../helpers/RouteHelper';
import { PollIcon } from '../../images/Icons';
import NavPrimaryItem from './NavPrimaryItem';

const styles = (theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    authStatus: {
      padding: theme.spacing(2),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  });

interface Props extends WithStyles<typeof styles> {
  theme: Theme;
  mobileOpen: boolean;
  closeDrawer: () => void;
}

const NavPrimary = ({ classes, theme, mobileOpen, closeDrawer }: Props) => {
  const breakpointIsXl = useMediaQuery(theme.breakpoints.up('xl'));

  const DashIcon = () => <PollIcon />;
  return (
    <nav className={classes.drawer}>
      <Drawer
        variant={breakpointIsXl ? 'permanent' : 'temporary'}
        open={breakpointIsXl ? true : mobileOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
        {...(!breakpointIsXl
          ? {
              anchor: theme.direction === 'rtl' ? 'right' : 'left',
              onClose: closeDrawer,
            }
          : {})}
      >
        <div>
          <div className={classes.toolbar} />
          <div className={classes.authStatus}>
            <Typography align="left" noWrap variant="body2" component="h4">
              {'Menu'}
            </Typography>
          </div>
          <Divider />
          <List disablePadding>
            <NavPrimaryItem
              label="Home"
              icon={DashIcon}
              path={routeHome()}
              pathname={routeHome()}
              name="home"
              key="home"
              closeDrawer={closeDrawer}
            />
            <Divider variant="inset" />
            <NavPrimaryItem
              label="Contact"
              path={routeContact()}
              pathname={routeContact()}
              name="contact"
              key="contact"
              closeDrawer={closeDrawer}
            />
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default withStyles(styles, { withTheme: true })(NavPrimary);
