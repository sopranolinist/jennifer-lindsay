import { render, waitForElement } from '@testing-library/react';
import noop from 'lodash/noop';
import React from 'react';
import { authExamples, getFullyWrappedComponent } from '../../helpers/TestHelper';
import RelationshipField from './';

describe('Component - RelationshipField', () => {
  // test data
  const classes = {
    formField: '',
    fieldButton: '',
  };
  const handleChange = noop;
  const onClickAdd = noop;
  const onClickEdit = noop;
  const formatItem = (item: any) => item.name;
  const label = 'Title';
  const name = 'title';
  const errors = null;
  const value = {
    id: '73b85243-36ec-49f8-9994-0a73cbed77b5',
    name: 'Partner',
    description: null,
    __typename: 'Title',
  };
  const items = [
    {
      id: '2d6cfc1d-559a-4262-a266-ffd16a0f69f3',
      name: 'Developer',
      description: 'software developer',
      __typename: 'Title',
    },
    {
      id: '0dad3381-f0ad-4a96-a24e-9fce1f40ae95',
      name: 'QA',
      description: null,
      __typename: 'Title',
    },
    {
      id: 'c4be1e25-a3e2-45e5-98b7-8a7636962474',
      name: 'Project Manager',
      description: null,
      __typename: 'Title',
    },
  ];

  test('renders the RelationshipField component', async done => {
    const { authContextProps, authObjProps } = authExamples.signedInAuthorized;
    const { container, getByText } = render(
      getFullyWrappedComponent(
        <RelationshipField
          classes={classes}
          handleChange={handleChange}
          onClickAdd={onClickAdd}
          onClickEdit={onClickEdit}
          formatItem={formatItem}
          label={label}
          name={name}
          errors={errors}
          value={value}
          items={items}
        />,
        { authContextProps, authObjProps },
      ),
    );

    const TitleDisplayName = await waitForElement(
      () => getByText(value.name)
    );
    expect(TitleDisplayName).toBeInTheDocument();
    expect(container).toMatchSnapshot();
    done();
  });
});
