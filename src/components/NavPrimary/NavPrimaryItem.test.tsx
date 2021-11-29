import { fireEvent, render, waitForElement } from '@testing-library/react';
import 'jest-dom/extend-expect';
import React from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import {
  authExamples,
  getFullyWrappedComponent
} from '../../helpers/TestHelper';
import NavPrimaryItem from './NavPrimaryItem';

const TestOne = () => <span>test 1</span>;
const TestTwo = () => <span>test 2</span>;
const Frag = () => <React.Fragment />;

describe('Screens - NavPrimaryItem', () => {
  const { authContextProps, authObjProps } = authExamples.signedInAuthorized;

  test('renders a button', async done => {
    const { container } = render(
      getFullyWrappedComponent(
        <NavPrimaryItem
          label={'Org Look Up'}
          icon={Frag}
          path={'/org'}
          pathname={'/org'}
          name={'orglookup'}
          closeDrawer={jest.fn()}
        />,
        { authContextProps, authObjProps }
      )
    );
    expect(container).toMatchSnapshot();
    done();
  });

  test('navigation triggers a route change', async done => {
    const { getByTestId, getByText } = render(
      getFullyWrappedComponent(
        <Router initialEntries={['/test/1']}>
          <NavPrimaryItem
            label={'Trigger'}
            icon={Frag}
            path={'/test/2'}
            pathname={'/test/2'}
            name={'trigger'}
            closeDrawer={jest.fn()}
          />
          <Route exact path={'/test/1'} component={TestOne} />
          <Route exact path={'/test/2'} component={TestTwo} />
        </Router>,
        { authContextProps, authObjProps }
      )
    );
    const button = await waitForElement(() =>
      getByTestId('navprimaryitem-trigger')
    );
    fireEvent.click(button);
    expect(getByText('test 2')).toBeInTheDocument();
    done();
  });

  test('renders a selected button when the link’s pathname matches the current URL’s pathname', async done => {
    const { container } = render(
      getFullyWrappedComponent(
        <Router initialEntries={['/test/2']}>
          <NavPrimaryItem
            label={'Trigger'}
            icon={Frag}
            path={'/test/2'}
            pathname={'/test/2'}
            name={'trigger'}
            closeDrawer={jest.fn()}
          />
          <Route exact path={'/test/1'} component={TestOne} />
          <Route exact path={'/test/2'} component={TestTwo} />
        </Router>,
        { authContextProps, authObjProps }
      )
    );
    expect(container.firstChild).toHaveClass('Mui-selected');
    done();
  });
});
