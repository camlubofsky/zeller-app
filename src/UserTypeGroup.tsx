import React from 'react';
import { Box, FormControl, RadioGroup } from '@mui/material';
import { UserType } from './UserType';

interface IUserTypeGroup {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedUserType: string;
}

const types = ['ADMIN', 'MANAGER'];

export const UserTypeGroup: React.FC<IUserTypeGroup> = ({
  onChange,
  selectedUserType,
}) => {
  return (
    <FormControl
      sx={{
        borderBottom: '2px solid rgb(243, 245, 249)',
        pb: '2rem',
        mb: '2rem',
      }}
    >
      <Box
        sx={{
          fontWeight: '500',
          fontSize: '1.25rem',
          mb: '1.5rem',
          color: 'rgb(49, 47, 47)',
        }}
        id="radio-buttons-group-label"
      >
        User Types
      </Box>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        defaultValue="female"
        value={selectedUserType}
        onChange={onChange}
        id="radio-button-group"
      >
        {types.map((type) => (
          <UserType
            key={type}
            type={type}
            checked={selectedUserType === type}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
