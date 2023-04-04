'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SelectCategories, SelectDifficulty } from '@/utils/SelectOpptions';

function OptionsPage() {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any, e: any) => {
    // console.log(data);
    if (data.categories === '' || data.difficulty === '') {
      reset();
      return;
    }

    router.push(
      `/questions?categories=${data.categories}&difficulty=${data.difficulty}`
    );
    e.preventDefault();
    e.stopPropagation();
    reset();
  };

  const categoryOptions = React.useMemo(
    () =>
      Object.keys(SelectCategories).map((item) => (
        <option
          key={item}
          value={item}
          className={
            item === '' ? 'text-xl italic text-gray-400' : 'text-xl not-italic'
          }
        >
          {SelectCategories[item]}
        </option>
      )),
    []
  );

  const difficultyOptions = React.useMemo(
    () =>
      Object.keys(SelectDifficulty).map((item) => (
        <option
          key={item}
          value={item}
          className={
            item === '' ? 'text-xl italic text-gray-400' : 'text-xl not-italic'
          }
        >
          {SelectDifficulty[item]}
        </option>
      )),
    []
  );

  return (
    <section className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-40 flex w-5/6 flex-col items-center justify-center"
      >
        <div className="flex items-center justify-center gap-10 text-gray-700">
          <select
            {...register('categories')}
            className="w-96 cursor-pointer rounded-md bg-[#f3f3e7] text-2xl italic tracking-wide shadow-[0px_12px_30px_#00000054] outline-none"
          >
            {categoryOptions}
          </select>
          <select
            {...register('difficulty')}
            className="w-36 cursor-pointer rounded-md bg-[#f3f3e7] text-2xl italic tracking-wide shadow-[0px_12px_30px_#00000054] outline-none"
          >
            {difficultyOptions}
          </select>
        </div>

        <button
          type="submit"
          className="mt-72 w-56 cursor-pointer rounded-3xl bg-[#0051AD] py-3 text-center text-4xl shadow-[0px_12px_40px_#00000054] outline-none duration-300  hover:scale-110"
        >
          Go!
        </button>
      </form>
    </section>
  );
}

export default OptionsPage;

// 0px 0.8px 2px #00000008,0px 2.7px 6.7px rgba(#0000000c),0px 12px 30px #00000014
