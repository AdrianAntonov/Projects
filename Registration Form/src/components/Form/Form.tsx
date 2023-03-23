import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axios } from '../../utils/axios/axios';
import { useForm, SubmitHandler } from 'react-hook-form';

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
    mutationFn: (user: IForm) => axios.post('/users.json', user),
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
    <section className="h-auto w-[25rem] bg-[#2fceac] px-8 pt-12 font-medium tracking-wider xs:w-full ">
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        autoComplete="off"
        className=" flex flex-col space-y-4 pb-12"
      >
        <div className="form-input-container">
          <label className="">First Name</label>
          <input
            {...register('firstName', {
              required: true,
            })}
            className="form-input xs:w-full"
          />
        </div>
        <div className="form-input-container">
          <label>Last Name</label>
          <input
            {...register('lastName', {
              required: true,
            })}
            className="form-input xs:w-full"
          />
        </div>
        <div className="form-input-container">
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
            className="form-input xs:w-full"
          />

          {errors.email && (
            <p className="form-error">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-input-container">
          <label>Password</label>
          <input
            type="password"
            {...register('password', {
              required: true,
              validate: {
                checkLength: (value) => value.length > 3 && value.length < 8,
              },
            })}
            className="form-input xs:w-full"
          />

          {errors.password?.type === 'required' && (
            <p className="form-error">Password is required!</p>
          )}
          {errors.password?.type === 'checkLength' && (
            <p className="form-error">
              Password should be at least 4 characters and maximum 7 characters
            </p>
          )}
        </div>
        <div className="flex justify-center ">
          <button
            type="submit"
            className="form-btn mt-6 h-10 w-10/12 rounded-full xs:w-full xs:rounded-none xs:text-xs"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <div className="flex  items-center">
        <button
          className="form-btn mb-6 h-10 w-full rounded-full xs:w-full xs:rounded-none xs:text-xs"
          onClick={handleShowUsers}
        >
          {show ? 'HIDE' : 'SHOW'} USERS
        </button>
      </div>
    </section>
  );
}

export default Form;
