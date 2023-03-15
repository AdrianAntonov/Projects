import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import classes from './Form.module.css';

export interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

type TToggle = {
  toggle: () => void;
  show: boolean;
};

function Form({ toggle, show }: TToggle) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (user: IForm) =>
      axios.post(
        'https://registration-form-bd9a1-default-rtdb.firebaseio.com/users.json',
        user
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });

  const onSubmitForm: SubmitHandler<IForm> = async (data) => {
    mutation.mutate(data);
    reset();
  };

  const handleShowUsers = () => {
    toggle();
  };

  return (
    <section className="h-auto w-[25rem] bg-[#2fceac] px-8 pt-12 font-medium tracking-wider ">
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        autoComplete="off"
        className=" flex flex-col space-y-4 pb-12"
      >
        <div className=" flex justify-between text-gray-900">
          <label className="">First Name</label>
          <input
            {...register('firstName', {
              required: true,
            })}
            className="border-b-2 border-gray-500 bg-[#2fceac] focus:outline-none"
          />
        </div>
        <div className=" flex justify-between text-gray-900">
          <label>Last Name</label>
          <input
            {...register('lastName', {
              required: true,
            })}
            className="border-b-2 border-gray-500 bg-[#2fceac] focus:outline-none"
          />
        </div>
        <div className=" flex flex-wrap items-baseline justify-between text-gray-900">
          <label>Email</label>
          <input
            type="text"
            {...register('email', {
              required: 'Please insert your email!',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid!',
              },
            })}
            className="border-b-2 border-gray-500 bg-[#2fceac] "
          />

          {errors.email && (
            <p className="text-[10px] text-orange-700">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="flex flex-wrap justify-between text-gray-900">
          <label>Password</label>
          <input
            type="password"
            {...register('password', {
              required: true,
              validate: {
                checkLength: (value) => value.length > 3 && value.length < 8,
              },
            })}
            className="border-b-2 border-gray-500 bg-[#2fceac] focus:outline-none"
          />

          {errors.password?.type === 'required' && (
            <p className="text-[10px] text-orange-700">Password is required!</p>
          )}
          {errors.password?.type === 'checkLength' && (
            <p className="text-[10px] text-orange-700">
              Password should be at least 6 characters and maximum 7 characters
            </p>
          )}
        </div>
        <div className="flex justify-center ">
          <button
            type="submit"
            className="mt-6 h-10 w-10/12 rounded-2xl bg-gradient-to-t from-[#5e8274] via-[#a5e1d4] to-[#b3ece0] font-bold tracking-widest duration-300 hover:-translate-y-[2px] hover:shadow-[0px_20px_30px_-11px_#1a1c1f]"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex  items-center">
        <button
          className="mb-6 h-10 w-full rounded-2xl bg-gradient-to-t from-[#5e8274] via-[#a5e1d4] to-[#b3ece0] font-bold tracking-widest duration-300 hover:-translate-y-[2px] hover:shadow-[0px_20px_30px_-11px_#1a1c1f] "
          onClick={handleShowUsers}
        >
          {show ? 'HIDE' : 'SHOW'} USERS
        </button>
      </div>
    </section>
  );
}

export default Form;

{
  /* box-shadow: rgba(31, 35, 65, 0.37) 0px 20px 30px -11px;
transform: translate(0px, -5px);
color: rgb(255, 255, 255);
text-decoration: none; */
}
{
  /* bg-gradient-to-t from-[#25362f] to-lime-700 */
}
