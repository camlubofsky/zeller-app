import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { User } from './User';
import { toTitleCase } from '../toTitleCase';

type TUsers = {
  email: string;
  id: string;
  name: string;
  role: string;
};

interface IUserGroup {
  users: TUsers[];
  type: string;
}

export const UserGroup: React.FC<IUserGroup> = ({ users, type }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        borderBottom: '2px solid rgb(243, 245, 249)',
        p: '0 2rem 1rem 0',
        width: smallScreen ? '15rem' : '50rem',
      }}
    >
      <Box
        sx={{
          fontWeight: '500',
          fontSize: '1.25rem',
          mb: '1.5rem',
          color: 'rgb(49, 47, 47)',
        }}
        id="group-label"
      >
        {toTitleCase(type)} Users
      </Box>
      {users.map(({ id, name, role }) => (
        <User key={id} name={name} role={role} />
      ))}
    </Box>
  );
};
