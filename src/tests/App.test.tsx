import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { App } from '../App';
import { ListZellerCustomers } from '../graphql/queries';

const mocks = [
  {
    request: {
      query: ListZellerCustomers,
    },
    result: jest.fn().mockReturnValue({
      data: {
        listZellerCustomers: {
          __typename: 'ZellerCustomerConnection',
          items: [
            {
              email: 'test1',
              id: 'test1',
              name: 'Test One',
              role: 'MANAGER',
            },
            {
              email: 'test2',
              id: 'test2',
              name: 'Test Two',
              role: 'MANAGER',
            },
          ],
        },
      },
    }),
  },
];

test('Snapshot test', async () => {
  const { asFragment } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
