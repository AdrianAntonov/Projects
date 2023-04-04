'use client';
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import QuestionCard from '@/components/QuestionCard';

function QuestionsPage() {
  const searchParams = useSearchParams();

  const search = Array.from(searchParams.values());
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const cacheQuestions = localStorage.getItem('questions');
    if (localStorage.getItem('questions')) {
      setItems(JSON.parse(cacheQuestions as string));
    }
    // console.log('effect', cacheQuestions);
  }, []);

  const { data: questions } = useQuery({
    queryKey: ['questions'],
    queryFn: () =>
      fetch(
        `https://the-trivia-api.com/api/questions?categories=${search[0]}&limit=5&difficulty=${search[1]}`
      ).then((res) => res.json()),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !globalThis?.localStorage?.getItem('questions'),
    onSuccess: (data) => {
      // console.log('query');
      localStorage.setItem('search', JSON.stringify(search));
      localStorage.setItem('questions', JSON.stringify(data));
      setItems(data);
    },
    // onError: (error) => alert(error),
    // enabled: items === null,
  });

  return (
    <section className="flex h-screen items-center justify-center">
      <QuestionCard items={items} />
    </section>
  );
}

export default QuestionsPage;
