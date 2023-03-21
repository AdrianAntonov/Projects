'use client';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

function QuestionsPage() {
  const searchParams = useSearchParams();

  const search = Array.from(searchParams.values());

  const { data: questions } = useQuery({
    queryKey: ['questions'],
    queryFn: () =>
      fetch(
        `https://the-trivia-api.com/api/questions?categories=${search[0]}&limit=5&difficulty=${search[1]}`
      ).then((res) => res.json()),
  });

  console.log(questions);

  console.log(search);

  return <h2 className="text-2xl">QuestionsPage</h2>;
}

export default QuestionsPage;
