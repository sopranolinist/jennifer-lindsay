import Tabs from '@material-ui/core/Tabs';
import { render } from '@testing-library/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { authExamples, getFullyWrappedComponent } from '../../helpers/TestHelper';
import LinkTab from './';

interface Props {
  history: RouteComponentProps['history'];
}

describe('Component - LinkTab', () => {
  test('should render', async done => {
    const { authContextProps, authObjProps } = authExamples.signedInAuthorized;
    const tabNav = { href: '/person/list-all', label: 'View All People' };
    const TabNav = withRouter((props: Props) => (
      <Tabs variant="fullWidth" indicatorColor="primary" textColor="primary" value={0}>
        <LinkTab {...tabNav} history={props.history} />
      </Tabs>
    ));
    const { container } = render(
      getFullyWrappedComponent(<TabNav />, {
        initialRoute: tabNav.href,
        authContextProps,
        authObjProps,
      }),
    );
    expect(container).toMatchSnapshot();
    done();
  });
});
