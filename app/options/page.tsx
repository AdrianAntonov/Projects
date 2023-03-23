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
      <h2 className="text-2xl">OptionsPage</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('categories')} className="italic">
          {Object.keys(SelectCategories).map((item) => (
            <option
              key={item}
              value={item}
              className={item === '' ? 'italic' : 'not-italic'}
            >
              {SelectCategories[item]}
            </option>
          ))}
        </select>

        <select {...register('difficulty')} className="italic">
          {Object.keys(SelectDifficulty).map((item) => (
            <option
              key={item}
              value={item}
              className={item === '' ? 'italic' : 'not-italic'}
            >
              {SelectDifficulty[item]}
            </option>
          ))}
        </select>
        <button type="submit">Go</button>
      </form>
    </section>
  );
}

export default OptionsPage;
