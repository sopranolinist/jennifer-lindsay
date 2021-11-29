import { act, cleanup, render } from '@testing-library/react';
import React from 'react';
import { mockConsole } from '../../helpers/TestHelper';
import { useSorting } from './';

describe('Hooks - useSorting', () => {
  let sortedData, createSortHandler, order, orderBy, orderId, Subscription;

  const testData = {
    data: [
      {
        num: 1,
        word: 'Test E'
      },
      {
        num: 1,
        word: 'Test D'
      },
      {
        num: 3,
        word: 'Test F'
      },
      {
        num: 2,
        word: 'Test A'
      },
      {
        num: 10,
        word: 'Test B'
      }
    ],
    sorts: {
      numAsc: {
        property: 'num',
        data: [
          {
            num: 1,
            word: 'Test E'
          },
          {
            num: 1,
            word: 'Test D'
          },
          {
            num: 2,
            word: 'Test A'
          },
          {
            num: 3,
            word: 'Test F'
          },
          {
            num: 10,
            word: 'Test B'
          }
        ]
      },
      numDesc: {
        property: 'num',
        data: [
          {
            num: 10,
            word: 'Test B'
          },
          {
            num: 3,
            word: 'Test F'
          },
          {
            num: 2,
            word: 'Test A'
          },
          {
            num: 1,
            word: 'Test D'
          },
          {
            num: 1,
            word: 'Test E'
          }
        ]
      },
      wordAsc: {
        property: 'word',
        data: [
          {
            num: 2,
            word: 'Test A'
          },
          {
            num: 10,
            word: 'Test B'
          },
          {
            num: 1,
            word: 'Test D'
          },
          {
            num: 1,
            word: 'Test E'
          },
          {
            num: 3,
            word: 'Test F'
          }
        ]
      },
      wordDesc: {
        property: 'word',
        data: [
          {
            num: 3,
            word: 'Test F'
          },
          {
            num: 1,
            word: 'Test E'
          },
          {
            num: 1,
            word: 'Test D'
          },
          {
            num: 10,
            word: 'Test B'
          },
          {
            num: 2,
            word: 'Test A'
          }
        ]
      }
    }
  };
  beforeEach(() => {
    mockConsole();
    sortedData = null;
    createSortHandler = null;
    order = null;
    orderBy = null;
    orderId = null;
    Subscription = props => {
      const {
        sortedData: sentSortedData,
        createSortHandler: sentCreateSortHandler,
        order: sentOrder,
        orderBy: sentOrderBy,
        orderId: sentOrderId
      } = useSorting(props.data);
      sortedData = sentSortedData;
      createSortHandler = sentCreateSortHandler;
      order = sentOrder;
      orderBy = sentOrderBy;
      orderId = sentOrderId;
      return <div />;
    };
  });
  afterEach(cleanup);
  test('useSort - do not perform sort if no sort is requested', async done => {
    render(<Subscription data={testData.data} />);
    expect(sortedData).toEqual(testData.data);
    done();
  });
  test('useSort - sort word data in ascending order first', async done => {
    render(<Subscription data={testData.data} />);
    act(() => {
      const wordHandler = createSortHandler(testData.sorts.wordAsc.property, 1);
      wordHandler({});
    });
    expect(sortedData).toEqual(testData.sorts.wordAsc.data);
    done();
  });
  test('useSort - sort word data in descending order after sorting on same field twice', async done => {
    const { container } = render(<Subscription data={testData.data} />);
    act(() => {
      createSortHandler(testData.sorts.wordAsc.property, 1)({});
    });
    expect(order).toEqual('asc');
    act(() => {
      createSortHandler(testData.sorts.wordAsc.property, 1)({});
    });
    expect(order).toEqual('desc');
    expect(sortedData).toEqual(testData.sorts.wordDesc.data);
    done();
  });
  test('useSort - sort number data in ascending order after sorting on different field', async done => {
    render(<Subscription data={testData.data} />);
    const wordHandler = createSortHandler(testData.sorts.wordAsc.property, 1);
    const numHandler = createSortHandler(testData.sorts.numAsc.property, 1);
    act(() => {
      wordHandler({});
    });
    act(() => {
      numHandler({});
    });
    expect(sortedData).toEqual(testData.sorts.numAsc.data);
    done();
  });
});
