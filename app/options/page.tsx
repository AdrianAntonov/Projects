'use client';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SelectCategories, SelectDifficulty } from '@/utils/SelectOpptions';

type TData = {
  categories: string;
  difficulty: string;
};

const enum EData {
  arts_and_literature = 'arts_and_literature',
  film_and_tv = 'film_and_tv',
  food_and_drink = 'food_and_drink',
  general_knowledge = 'general_knowledge',
  geography = 'geography',
  history = 'history',
  music = 'music',
  science = 'science',
  society_and_culture = 'society_and_culture',
  sport_and_leisure = 'sport_and_leisure',
}

function OptionsPage() {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any, e: any) => {
    console.log(data);
    if (data.categories === '' || data.difficulty === '') {
      reset();
      return;
    }

    router.push(
      `/questions?categories=${data.categories}&difficulty=${data.difficulty}`
    );
    // reset();
    e.preventDefault();
    e.stopPropagation();
    reset();
  };

  // TODO all options should be mapped from a separate component !!!

  // console.log(
  //   Object.keys(SelectCategories).map((item) => SelectCategories[item])
  // );

  return (
    <section>
      {/* <h2 className="text-2xl">OptionsPage</h2> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-400 flex flex-col justify-center items-center"
      >
        <div className="text-gray-700">
          <select
            {...register('categories')}
            className="italic w-96 tracking-wide outline-none text-3xl rounded-md"
          >
            {Object.keys(SelectCategories).map((item) => (
              <option
                key={item}
                value={item}
                className={
                  item === ''
                    ? 'italic text-gray-400 font-100'
                    : 'not-italic text-xl'
                }
              >
                {SelectCategories[item]}
              </option>
            ))}
          </select>
          <select
            {...register('difficulty')}
            className="italic ml-12 w-36 tracking-wide outline-none text-3xl rounded-sm"
          >
            {Object.keys(SelectDifficulty).map((item) => (
              <option
                key={item}
                value={item}
                className={item === '' ? 'italic' : 'not-italic text-xl'}
              >
                {SelectDifficulty[item]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Go</button>
        </div>
      </form>
    </section>
  );
}

export default OptionsPage;
