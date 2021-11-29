import {
  cleanup,
  fireEvent,
  render,
  waitForElement
} from '@testing-library/react';
import 'jest-dom/extend-expect';
import React from 'react';
import { getJssWrappedComponent, mockConsole } from '../../helpers/TestHelper';
import SearchInput from '.';

describe('SearchInput', () => {
  beforeEach(mockConsole);
  afterEach(cleanup);

  test('renders', async done => {
    const searchHandler = e => {},
      title = 'Search by Keyword',
      className = 'searchInput';
    const { container } = render(
      getJssWrappedComponent(
        <SearchInput
          searchHandler={searchHandler}
          title={title}
          className={className}
        />
      )
    );
    expect(container).toMatchSnapshot();
    done();
  });

  test('displays cancel button when input value changes', async done => {
    const searchHandler = e => {},
      title = 'Search by Keyword',
      className = 'searchInput',
      id = 'search-input';
    const { getByTestId, queryByTestId } = render(
      getJssWrappedComponent(
        <SearchInput
          searchHandler={searchHandler}
          title={title}
          className={className}
          id={id}
        />
      )
    );
    expect(queryByTestId(`${id}-clear`)).not.toBeInTheDocument();
    const Input = await waitForElement(() => getByTestId(id));
    fireEvent.change(Input, { target: { value: 'Foo' } });
    expect(queryByTestId(`${id}-clear`)).toBeInTheDocument();
    done();
  });

  test('on click the cancel button is no longer displayed', async done => {
    const searchHandler = e => {},
      title = 'Search by Keyword',
      className = 'searchInput',
      id = 'search-input';
    const { getByTestId, queryByTestId } = render(
      getJssWrappedComponent(
        <SearchInput
          searchHandler={searchHandler}
          title={title}
          className={className}
          id={id}
        />
      )
    );
    const Input = await waitForElement(() => getByTestId(id));
    fireEvent.change(Input, { target: { value: 'Foo' } });
    const ClearButton = await waitForElement(() => getByTestId(`${id}-clear`));
    fireEvent.click(ClearButton);
    expect(queryByTestId(`${id}-clear`)).not.toBeInTheDocument();
    done();
  });
});
