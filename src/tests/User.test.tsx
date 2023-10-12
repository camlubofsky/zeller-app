import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { User } from '../components/User';

const testUser = {
  email: 'test1',
  id: 'test1',
  name: 'Test One',
  role: 'MANAGER',
};
test('User is shown when data is passed to the component', () => {
  // Render the component
  render(<User name={testUser.name} role={testUser.role} />);

  // Assert the name of person displayed
  const person1Name = screen.queryByText('Test One');

  // Assert the role of person displayed
  const person1Role = screen.queryByText('Manager');

  // After clicking the button, you expect all parts of the person to be displayed
  expect(person1Name).toBeInTheDocument();
  expect(person1Role).toBeInTheDocument();
});
