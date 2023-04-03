// type TQuestionCard = {
//   correctAnswer: string;
//   incorrectAnswers: string[];
//   question: string;
//   id: number;
// };
'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function QuestionCard(props: any) {
  const [questNum, setQuestNum] = useState(0);
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState('');

  const router = useRouter();
  // const [color, setColor] = useState('bg-red-400');

  const { questions } = props;

  const arrShuflle = React.useMemo(() => {
    return questions[questNum]?.incorrectAnswers
      .concat(questions[questNum]?.correctAnswer)
      ?.sort(() => Math.random() - 0.5);
  }, [questNum, questions]);

  const handleAnswer = (answer: string, correct: string) => {
    setCheck(answer);
  };

  const toNextQuestion = () => {
    if (questions[questNum]?.correctAnswer === check) {
      setScore((prev) => prev + 1);
    }
    if (questNum === questions.length - 1) {
      router.push(`/results?score=${score}&total=${questions.length}`);
    }
    setQuestNum((prev) => prev + 1);
    setCheck('');
  };

  // console.log(questNum);

  return !(questNum === questions.length) ? (
    <section className="-mt-32 flex w-screen items-center justify-center">
      <div className="flex h-full w-7/12 flex-col items-center justify-center rounded-md bg-[#e38a467f] py-8 px-12 shadow-xl">
        <div className="mb-10 text-center text-4xl">
          {questions[questNum]?.question}
        </div>
        <div className="ml-auto w-10/12">
          {arrShuflle?.map((question: any) => (
            <li
              key={question}
              onClick={(e) =>
                handleAnswer(question, questions[questNum]?.correctAnswer)
              }
              className={
                question === check
                  ? 'my-4 w-10/12 scale-105 cursor-pointer list-none rounded-full bg-[#00978d] px-6 py-2 text-xl'
                  : 'my-4 w-10/12 list-none rounded-full bg-indigo-600/70 px-6 py-2 text-xl duration-300 hover:scale-105 hover:cursor-pointer hover:bg-slate-300/70 hover:text-[#2e2e15cf]'
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
          className="ml-auto w-1/6 rounded-full bg-[#0C5500] py-2 px-4 text-xl tracking-widest shadow-xl duration-300 hover:scale-90 hover:shadow-none "
        >
          NEXT
        </button>
      </div>
    </section>
  ) : null;
}

export default QuestionCard;

// if (questNum === questions.length - 1) {
//   alert('No more questions!');
//   return;
// }

// gray Friends #554149
// Matching Palette #007269
