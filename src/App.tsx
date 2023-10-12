import React from 'react';
import { Box } from '@mui/material';
import { UserTypeGroup } from './components/UserTypeGroup';
import { UserGroup } from './components/UserGroup';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ListZellerCustomers } from './graphql/queries';

export const App: React.FC<any> = () => {
  const [selectedUserType, setSelectedUserType] = useState<string>('');

  const { loading, error, data } = useQuery(ListZellerCustomers);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const users2 = data.listZellerCustomers.items;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUserType(event.target.value);
  };

  return (
    <Box
      sx={{
        p: '3rem',
        flexDirection: 'column',
      }}
    >
      <UserTypeGroup
        onChange={handleChange}
        selectedUserType={selectedUserType}
      />
      {selectedUserType && (
        <UserGroup
          users={users2.filter((user: any) => user.role === selectedUserType)}
          type={selectedUserType}
        />
      )}
    </Box>
  );
};
