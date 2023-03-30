'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SelectCategories, SelectDifficulty } from '@/utils/SelectOpptions';

function OptionsPage() {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any, e: any) => {
    console.log(data);
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
            item === '' ? 'italic text-gray-400 text-xl' : 'not-italic text-xl'
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
            item === '' ? 'italic text-gray-400 text-xl' : 'not-italic text-xl'
          }
        >
          {SelectDifficulty[item]}
        </option>
      )),
    []
  );

  return (
    <section className="flex justify-center items-center">
      {/* <h2 className="text-2xl">OptionsPage</h2> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-40 w-5/6 flex flex-col justify-center items-center"
      >
        <div className="text-gray-700 flex justify-center items-center gap-10">
          <select
            {...register('categories')}
            className="italic w-96 tracking-wide outline-none text-2xl rounded-md bg-[#EFEFDC] cursor-pointer shadow-[0px_12px_30px_#00000054]"
          >
            {categoryOptions}
          </select>
          <select
            {...register('difficulty')}
            className="italic w-36 tracking-wide outline-none text-2xl rounded-md bg-[#EFEFDC] cursor-pointer shadow-[0px_12px_30px_#00000054]"
          >
            {difficultyOptions}
          </select>
        </div>
        <div className="mt-72 w-56 text-4xl text-center rounded-3xl py-3 cursor-pointer outline-none shadow-[0px_12px_40px_#00000054] bg-[#0051AD] ">
          <button type="submit" className=" ">
            Go!
          </button>
        </div>
      </form>
    </section>
  );
}

export default OptionsPage;

// 0px 0.8px 2px #00000008,0px 2.7px 6.7px rgba(#0000000c),0px 12px 30px #00000014
