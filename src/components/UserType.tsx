import React from 'react';
import {
  Box,
  FormControlLabel,
  Radio,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { toTitleCase } from '../toTitleCase';

interface IUserType {
  type: string;
  checked: Boolean;
}

export const UserType: React.FC<IUserType> = ({ type, checked }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        background: checked && 'rgb(232, 242, 251)',
        width: smallScreen ? '15rem' : '50rem',
        p: '0.25rem 1rem',
        borderRadius: '0.5rem',
      }}
    >
      <FormControlLabel
        test-id={`test-${type}`}
        value={type}
        control={<Radio />}
        label={toTitleCase(type)}
      />
    </Box>
  );
};
