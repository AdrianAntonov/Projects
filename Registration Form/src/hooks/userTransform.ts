import { useState } from 'react';

export const useTransformedData = (data: any) => {
  const [users, setUsers] = useState(data);

  const transformedData = (data: any) => {
    const trans = [];

    for (let key in data) {
      trans.push({
        id: key,
        firstName: data[key].firstName,
        lastName: data[key].lastName,
        email: data[key].email,
      });
    }
    setUsers(trans);
  };

  return [users, transformedData];
};
