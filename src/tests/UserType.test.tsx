import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { UserType } from '../components/UserType';
import { RadioGroup } from '@mui/material';

const testType = 'admin';
test('Radio button is checked when selected', () => {
  // Render the component in its own group
  render(
    <RadioGroup value={testType}>
      <UserType type={testType} checked={true} />
    </RadioGroup>
  );

  // Use getByRole to get the admin radio button
  const adminRadio = screen.getByRole('radio', { name: 'Admin' });

  // Check that the button has been selected
  expect(adminRadio).toBeChecked();
});
