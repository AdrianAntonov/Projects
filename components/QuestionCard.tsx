'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';

type TQuestionCard = {
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  id: number;
};

interface Props {
  items: TQuestionCard[];
}

const QuestionCard: React.FC<Props> = ({ items }) => {
  const [step, setStep] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [check, setCheck] = React.useState('');
  const [results, setResults] = React.useState<string[]>([]);

  const router = useRouter();

  React.useEffect(() => {
    if (localStorage.getItem('check')) {
      // console.log('check1');
      setCheck(localStorage.getItem('check') as string);
    }

    if (localStorage.getItem('score')) {
      // console.log('check1');
      setScore(Number(localStorage.getItem('score')));
    }

    if (localStorage.getItem('step')) {
      // console.log('step');
      setStep(parseInt(localStorage.getItem('step') as string));
    }

    if (localStorage.getItem('results') === undefined) {
      setResults([]);
    } else {
      setResults(JSON.parse(localStorage.getItem('results')!));
    }
  }, []);

  React.useEffect(() => {
    // console.log('check2');
    localStorage.setItem('check', check);
    localStorage.setItem('score', JSON.stringify(score));
    localStorage.setItem('step', step.toString());
    localStorage.setItem('results', JSON.stringify(results));
  }, [check, results, step, score]);

  React.useEffect(() => {
    const result = items[step]?.incorrectAnswers
      .concat(items[step]?.correctAnswer)
      ?.sort();

    if (!result) {
      setResults([]);
    } else {
      setResults(result);
    }
  }, [items, step]);

  const toNextQuestion = () => {
    if (items[step]?.correctAnswer === check) {
      setScore((prev) => prev + 1);
    }

    setCheck('');
    console.log(score);
    if (step === items.length - 1) {
      router.push(`/results?total=${items.length}`);
      // setStep(0);
      // setScore(0);
    } else {
      setStep((i) => i + 1);
    }
  };

  if (!items.length) {
    <h1>Loading...</h1>;
  }

  return !(step === items.length) ? (
    <section className="-mt-32 flex w-screen items-center justify-center">
      <div className="flex h-full w-7/12 flex-col items-center justify-center rounded-md bg-[#e38a467f] py-8 px-12 shadow-xl">
        <div className="mb-10 text-center text-4xl">
          {items[step]?.question}
        </div>
        <div className="ml-auto w-10/12">
          {results?.map((question: any) => (
            <li
              key={question}
              onClick={() => setCheck(question)}
              className={
                question === check
                  ? 'my-4 w-10/12 scale-105 cursor-pointer list-none rounded-full bg-[#00978d] px-6 py-2 text-xl'
                  : 'my-4 w-10/12 list-none rounded-full bg-indigo-600/70 px-6 py-2 text-xl duration-300 hover:scale-105 hover:cursor-pointer hover:bg-slate-300/70  hover:text-[#2e2e15cf]'
              }
            >
              {question}
            </li>
          ))}
        </div>
        <button
          type="button"
          onClick={toNextQuestion}
          disabled={check === ''}
          className="ml-auto w-1/6 cursor-pointer rounded-full bg-[#0C5500] py-2 px-4 text-xl tracking-widest shadow-xl duration-300 hover:scale-90 hover:shadow-none active:bg-[#1cd000]"
        >
          NEXT
        </button>
      </div>
      <div className="h-8 w-8 text-xl">{score}</div>
    </section>
  ) : (
    <h3 className="-mt-80 text-xl">Please choose another category</h3>
  );
};

export default QuestionCard;

// if (questNum === questions.length - 1) {
//   alert('No more questions!');
//   return;
// }

// gray Friends #554149
// Matching Palette #007269
