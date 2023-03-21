'use client';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

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
    e.preventDefault();
    e.stopPropagation();
    router.push(
      `/questions?categories=${data.categories}&difficulty=${data.difficulty}`
    );
    reset();
  };

  // TODO all options should be mapped from a separate component !!!

  return (
    <section>
      <h2 className="text-2xl">OptionsPage</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('categories')} multiple>
          <option value="">Categories</option>
          <option value="arts_and_literature">Arts & Literature</option>
          <option value="film_and_tv">Film & Tv</option>
          <option value="food_and_drink">Food & Drink</option>
          <option value="general_knowledge">General Knowledge</option>
          <option value="geography">Geography</option>
          <option value="history">History</option>
          <option value="music">Music</option>
          <option value="science">Science</option>
          <option value="society_and_culture">Society & Culture</option>
          <option value="sport_and_leisure">Sport & Leisure</option>
        </select>
        <select {...register('difficulty')}>
          <option value="">Diffculty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button type="submit">Go</button>
      </form>
    </section>
  );
}

export default OptionsPage;
