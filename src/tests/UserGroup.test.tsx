import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { UserGroup } from '../UserGroup';

const testUsers = [
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
];
test('Manager users are shown when manager is selected', () => {
  // Render the component
  render(<UserGroup users={testUsers} type="MANAGER" />);

  // Assert the number of people displayed
  const person1 = screen.queryByText('Test One');
  const person2 = screen.queryByText('Test Two');

  // After clicking the button, you expect all people to be displayed
  expect(person1).toBeInTheDocument();
  expect(person2).toBeInTheDocument();
});
