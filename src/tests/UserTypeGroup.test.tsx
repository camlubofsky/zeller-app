import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { UserTypeGroup } from '../components/UserTypeGroup';

const testType = 'ADMIN';
const testOnChange = jest.fn();
test('Radio group has options "admin" and "manager"', () => {
  // Render the component
  render(<UserTypeGroup selectedUserType={testType} onChange={testOnChange} />);

  // Use getByRole to get the radio buttons by their roles
  const adminRadio = screen.getByRole('radio', { name: 'Admin' });
  const managerRadio = screen.getByRole('radio', { name: 'Manager' });

  // Assert that both radio buttons are found
  expect(adminRadio).toBeInTheDocument();
  expect(managerRadio).toBeInTheDocument();
});

test('Admin button is checked', () => {
  // Render component
  render(<UserTypeGroup selectedUserType={testType} onChange={testOnChange} />);

  // Check that admin button is checked
  expect(screen.getByLabelText(/admin/i)).toBeChecked();
});
