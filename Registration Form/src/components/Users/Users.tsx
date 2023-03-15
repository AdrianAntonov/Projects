import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

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
    <section className="mt-12 pt-2">
      <h2 className=" mb-8 text-center text-5xl font-bold tracking-widest text-[#2fceac]  drop-shadow-[3px_1px_#5e8274]">
        USERS
      </h2>
      <table className="w-[35rem] table-fixed bg-[#a5e1d4] text-gray-900">
        <thead>
          <tr className="bg-emerald-100 tracking-widest text-gray-900">
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((el) => (
            <tr
              key={el.id}
              className="font-medium tracking-wide odd:bg-[#2fceac]"
            >
              <td className="h-14 border-2 text-center drop-shadow-[0_35px_35px_#f46cdd]">
                {el.firstName} {el.lastName}
              </td>
              <td className="h-14 border-2 text-center">{el.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Users;
