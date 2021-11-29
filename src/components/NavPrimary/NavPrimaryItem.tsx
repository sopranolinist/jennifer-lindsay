import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { ReactElement } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { isSelected } from '../../helpers/NavHelper';

interface Props extends RouteComponentProps {
  label: string;
  icon?: () => ReactElement;
  pathname?: string;
  path?: string;
  subnav?: () => void;
  external?: boolean;
  name: string;
  children?: ReactElement;
  closeDrawer: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 16,
      paddingBottom: 16,
    },
  }),
);

const NavPrimaryItem = ({
  label,
  icon,
  pathname,
  path,
  subnav,
  external,
  name,
  history,
  location,
  children,
  closeDrawer,
}: Props) => {
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (external) {
      closeDrawer();
    } else if (subnav) {
      subnav();
    } else {
      event.preventDefault();
      closeDrawer();
      history.push({
        pathname,
      });
    }
  };
  return (
    <>
      <ListItem
        button
        data-testid={`navprimaryitem-${name}`}
        selected={isSelected(path, location.pathname)}
        component="a"
        href={pathname}
        onClick={handleClick}
        className={classes.root}
        {...(external
          ? {
              target: '_blank',
            }
          : '')}
      >
        {icon && <ListItemIcon>{icon()}</ListItemIcon>}
        <ListItemText primary={label} inset={!icon} />
      </ListItem>
      {children}
    </>
  );
};

export default withRouter(NavPrimaryItem);
