import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { LayoutContext } from '../../hooks/LayoutContext';
import { drawerWidth } from './../../helpers/NavHelper';
const styles = (theme: Theme) =>
  createStyles({
    footer: {
      background: '#ffffff',
      height: 56,
      [theme.breakpoints.up('sm')]: {
        padding: `0 ${theme.spacing(3)}px`
      },
      [theme.breakpoints.up('md')]: {
        height: 64,
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12)
      }
    },
    footerHasRightDrawer: {
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12)
      }
    },
    footerLoggedIn: {
      [theme.breakpoints.up('xl')]: {
        paddingLeft: `calc(${theme.spacing(12)}px + ${drawerWidth}px)`
      }
    },
    footerContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'space-between'
      }
    },
    textLink: {
      color: theme.palette.primary.dark
    },
    [theme.breakpoints.up('sm')]: {
      footerContentLt: {
        justifyContent: 'flex-start'
      },
      footerContentRt: {
        justifyContent: 'flex-end'
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  version: string | undefined;
  year: number;
}

const Footer = ({ classes, version, year }: Props) => {
  const layoutContext = useContext(LayoutContext);
  if (!layoutContext) {
    throw new Error('Layout context is missing');
  }

  const { rightDrawerOpen } = layoutContext;
  return (
    <div data-testid="component-footer">
      <Divider />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classNames(classes.footer, {
          [classes.footerLoggedIn]: true,
          [classes.footerHasRightDrawer]: rightDrawerOpen
        })}
      >
        <Grid
          item
          xs={12}
          sm={10}
          className={`${classes.footerContent} ${classes.footerContentLt}`}
        >
          <Typography
            variant="subtitle2"
            component="span"
            className={classes.legal}
          >
            {`© ${year} `}
            <a className={classes.textLink} href="https://jenniferlindsay.com/">
              Jennifer Lindsay
            </a>
            {` | All Rights Reserved`}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          className={`${classes.footerContent} ${classes.footerContentRt}`}
        >
          <Typography variant="subtitle2" component="span">
            {`Version ${version}`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Footer.defaultProps = {
  version: process.env.REACT_APP_VERSION,
  year: new Date().getFullYear()
};

export default withStyles(styles)(Footer);
