import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classnames from 'classnames';
import React, { useContext, useState } from 'react';
import { drawerWidth } from '../../helpers/NavHelper';
import { LayoutContext } from '../../hooks/LayoutContext';
import { CloseIcon, MenuIcon } from '../../images/Icons';
import { ReactComponent as Logomark } from '../../images/logos/Logomark.svg';
import { ReactComponent as Logotype } from '../../images/logos/Logotype.svg';
import NavPrimary from '../NavPrimary';

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      marginLeft: drawerWidth,
      zIndex: 2000,
      [theme.breakpoints.up('xl')]: {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    },
    appBarLoggedOut: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('xl')]: {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    },
    menuButton: {
      marginRight: theme.spacing(0.5),
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      }
    },
    logotype: {
      flexGrow: 1,
      display: 'flex'
    },
    logotypeWrapper: {
      width: 220,
      paddingTop: 10,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    logomarkWrapper: {
      width: 55,
      paddingTop: 10,
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    orgName: {
      color: theme.palette.text.primary,
      textTransform: 'uppercase',
      lineHeight: '2em',
      marginLeft: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      borderLeft: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        marginLeft: theme.spacing(3)
      }
    },
    hasRightDrawer: {
      [theme.breakpoints.up('md')]: {
        paddingRight: drawerWidth
      }
    }
  })
);

const Header = (props: Props) => {
  const layoutContext = useContext(LayoutContext);
  const classes = useStyles();

  if (!layoutContext) {
    throw new Error('Layout context is missing');
  }
  const { rightDrawerOpen } = layoutContext;

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const closeDrawer = () => setMobileOpen(false);
  return (
    <div data-testid="component-header">
      <AppBar
        position="fixed"
        className={classnames(
          { [classes.appBar]: true },
          { [classes.appBarLoggedOut]: false },
          { [classes.hasRightDrawer]: rightDrawerOpen }
        )}
        elevation={1}
        color="default"
        component="div"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open navigation drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <div className={classes.logotype}>
            <div className={classes.logomarkWrapper}>
              <Logomark />
            </div>
            <div className={classes.logotypeWrapper}>
              <Logotype />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      
        <NavPrimary mobileOpen={mobileOpen} closeDrawer={closeDrawer} />
    </div>
  );
};
export default Header;
