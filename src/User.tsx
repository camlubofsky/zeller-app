import { Box } from '@mui/material';
import React from 'react';
import { toTitleCase } from './toTitleCase';

interface IUser {
  name: string;
  role: string;
}

const InitialBox = ({ name }: { name: string }) => {
  return (
    <Box
      sx={{
        height: '2.5rem',
        width: '2.5rem',
        fontSize: '1.25rem',
        color: 'rgb(77, 151, 220)',
        background: 'rgb(232, 242, 251)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '.25rem',
      }}
    >
      {name.charAt(0).toUpperCase()}
    </Box>
  );
};

export const User: React.FC<IUser> = ({ name, role }) => {
  const nameProps = {
    fontSize: '1.25rem',
  };

  const roleProps = {
    fontSize: '0.75rem',
    color: 'gray',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        marginY: '1rem',
      }}
    >
      <InitialBox name={name} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Box sx={nameProps}>{name}</Box>
        <Box sx={roleProps}>{toTitleCase(role)}</Box>
      </Box>
    </Box>
  );
};
