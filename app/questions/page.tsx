'use client';
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import QuestionCard from '@/components/QuestionCard';

function QuestionsPage() {
  const searchParams = useSearchParams();

  const search = Array.from(searchParams.values());

  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    // if (window.localStorage.getItem('questions') === null)
    window.localStorage.setItem('questions', JSON.stringify(search));

    return () => {
      window.localStorage.removeItem('questions');
    };
  }, [search]);

  // console.log(window.localStorage.getItem('questions'));
  // console.log(JSON.stringify(search));
  // console.log(questions);
  // const { data: questions } = useQuery({
  useQuery({
    queryKey: ['questions'],
    queryFn: () =>
      fetch(
        `https://the-trivia-api.com/api/questions?categories=${search[0]}&limit=5&difficulty=${search[1]}`
      ).then((res) => res.json()),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    onSuccess: (data) => {
      console.log(data);
      setQuestions(data);
    },
    enabled:
      window.localStorage.getItem('questions') !== JSON.stringify(search),
  });

  return (
    <section className="flex h-screen items-center justify-center">
      {questions && <QuestionCard questions={questions} />}
    </section>
  );
}

export default QuestionsPage;
