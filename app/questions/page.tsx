'use client';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import QuestionCard from '@/components/QuestionCard';

function QuestionsPage() {
  const searchParams = useSearchParams();

  const search = Array.from(searchParams.values());

  const { data: questions } = useQuery({
    queryKey: ['questions'],
    queryFn: () =>
      fetch(
        `https://the-trivia-api.com/api/questions?categories=${search[0]}&limit=5&difficulty=${search[1]}`
      ).then((res) => res.json()),
    refetchOnWindowFocus: false,
  });

  // console.log(questions && questions[0].id);

  return (
    <section>
      {/* <h2 className="text-2xl">QuestionsPage</h2> */}
      {questions && <QuestionCard questions={questions} />}
    </section>
  );
}

export default QuestionsPage;
