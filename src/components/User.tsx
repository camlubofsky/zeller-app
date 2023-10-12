import { Box, Stack } from '@mui/material';
import React from 'react';
import { toTitleCase } from '../toTitleCase';

interface IUser {
  name: string;
  role: string;
}

const FirstLetterBox = ({ name }: { name: string }) => {
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
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        marginY: 2,
      }}
    >
      <FirstLetterBox name={name} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Stack sx={{ fontSize: '1.25rem' }}>{name}</Stack>
        <Stack
          sx={{
            fontSize: '0.75rem',
            color: 'gray',
          }}
        >
          {toTitleCase(role)}
        </Stack>
      </Box>
    </Box>
  );
};
