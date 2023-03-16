import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../../utils/axios/axios';
import Loader from '../../utils/loader';

interface IFormU {
  [key: string]: string;
}

function Users() {
  const [users, setUsers] = useState<IFormU[]>();

  const { isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => axios.get('/users.json').then((res) => res.data),

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="mt-12 pt-2 us:w-full">
      <h2 className=" mb-8 text-center text-5xl font-bold tracking-widest text-[#2fceac] drop-shadow-[3px_1px_#5e8274]">
        USERS
      </h2>
      <table className="w-[35rem] table-fixed border-collapse bg-[#a5e1d4] text-gray-900 us:w-full us:text-sm">
        <thead>
          <tr className="h-12 tracking-widest text-gray-900">
            <th className="border-2">Name</th>
            <th className="border-2">Email</th>
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
