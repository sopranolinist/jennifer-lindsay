import { act, cleanup, render } from '@testing-library/react';
import React from 'react';
import { mockConsole } from '../../helpers/TestHelper';
import { useSearch } from './';

describe('Hooks - useSearch', () => {
  let searchHandler, searchedData, Subscription;

  const testData = {
    data: [
      {
        first: 'Random Random Random',
        second: 'Second field first data row',
        third: 'Third field first data row'
      },
      {
        first: '123 456 789 - these are number triplets',
        second: 'Second field first data row',
        third: 'Third field first data row'
      },
      {
        first: 'ABC DEF GHI - these are letter triplets',
        second: 'Second field third data row',
        third: 'Third field third data row'
      },
      {
        first: 'Missing some data!'
      }
    ],
    dataFormat: [
      { title: 'First Field', field: 'first', searchable: true },
      { title: 'Second Field', field: 'second', searchable: true },
      {
        title: 'Unsearchable Field',
        field: 'third',
        searchable: false
      },
      {
        title: 'Broken Field',
        searchable: true
      }
    ],
    enabled: true
  };
  beforeEach(() => {
    mockConsole();
    searchedData = null;
    Subscription = props => {
      const {
        searchHandler: sentSearchHandler,
        searchedData: sentSearchedData
      } = useSearch(props.data, props.dataFormat, props.enabled);
      searchHandler = sentSearchHandler;
      searchedData = sentSearchedData;
      return <div />;
    };
  });
  afterEach(cleanup);

  test('useSearch - do not perform search if no search is requested', async done => {
    const { container } = render(<Subscription {...testData} />);
    expect(searchedData).toEqual(testData.data);
    done();
  });
  test('useSearch - filter data when search is requested', async done => {
    const { container } = render(<Subscription {...testData} />);
    act(() => {
      searchHandler({ target: { value: 'ABC' } });
    });
    expect(searchedData).toEqual([testData.data[2]]);
    done();
  });
  test('useSearch - return empty array if no data found from search', async done => {
    const { container } = render(<Subscription {...testData} />);
    act(() => {
      searchHandler({ target: { value: 'No' } });
    });
    expect(searchedData).toEqual([]);
    done();
  });
});
