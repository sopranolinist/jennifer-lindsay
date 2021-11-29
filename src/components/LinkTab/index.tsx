import Tab from '@material-ui/core/Tab';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface LinkTabProps {
  label: string;
  href: string;
  history: RouteComponentProps['history'];
}

const LinkTab = (props: LinkTabProps) => {
  const { history, ...rest } = props;
  const onClickHandler = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    history.push({ pathname: rest.href });
  };
  return <Tab component="a" onClick={onClickHandler} {...rest} />;
};

export default LinkTab;
