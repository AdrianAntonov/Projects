'use client';
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import QuestionCard from '@/components/QuestionCard';

function QuestionsPage() {
  const searchParams = useSearchParams();

  const search = Array.from(searchParams.values());

  const items = window.localStorage.getItem('totalQuestions');

  // React.useEffect(() => {
  //   // if (window.localStorage.getItem('questions') === null)
  //   window.localStorage.setItem('search', JSON.stringify(search));
  // }, [search]);

  const { data: questions } = useQuery({
    queryKey: ['questions'],
    queryFn: () =>
      fetch(
        `https://the-trivias-api.com/api/questions?categories=${search[0]}&limit=5&difficulty=${search[1]}`
      ).then((res) => res.json()),
    refetchOnWindowFocus: false,
    // refetchOnMount: false,
    onSuccess: (data) => {
      window.localStorage.setItem('search', JSON.stringify(search));
      window.localStorage.setItem('totalQuestions', JSON.stringify(data));
      window.localStorage.setItem('questionNumber', JSON.stringify(0));
    },
    onError: (error) => alert(error),
    enabled: items === null,
  });

  return (
    <section className="flex h-screen items-center justify-center">
      {/* {questions && <QuestionCard questions={questions} />} */}
      {questions && <QuestionCard />}
    </section>
  );
}

export default QuestionsPage;
