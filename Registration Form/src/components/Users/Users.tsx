import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import classes from './Users.module.css';

interface IFormU {
  [key: string]: string;
}

function Users() {
  const [users, setUsers] = useState<IFormU[]>();

  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch(
        'https://registration-form-bd9a1-default-rtdb.firebaseio.com/users.json'
      ).then((response) => response.json()),

    onSuccess(data: any) {
      transformedData(data);
    },
  });

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

  return (
    <section>
      <h2>USERS</h2>
      <div className={classes.users}>
        {users?.map((el) => (
          <ul key={el.id}>
            <li className="bg-lime-50 inline-block  border-gray-500 border-b-2">
              Name: {el.firstName} {el.lastName}
            </li>
            <li>Email: {el.email}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}

export default Users;
