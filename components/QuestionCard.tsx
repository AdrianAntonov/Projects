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
    // if (answer === check) {
    //   return;
    // }
    setCheck(answer);
    // if (answer === correct) {
    //   console.log('CORRECT!');
    //   setCheck(answer);
    // } else {
    //   console.log('WRONG!');
    //   setCheck(answer);
    // }
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
    <section className="-mt-32 w-screen flex justify-center items-center">
      <div className="bg-[#877179] h-full flex justify-center items-center flex-col py-8 px-12 rounded-md w-7/12">
        <div className="mb-10 text-4xl text-center">
          {questions[questNum]?.question}
        </div>
        <div className="w-10/12 ml-auto">
          {arrShuflle?.map((question: any) => (
            <li
              key={question}
              onClick={(e) =>
                handleAnswer(question, questions[questNum]?.correctAnswer)
              }
              className={
                question === check
                  ? 'bg-[#00C9BA] list-none my-4 px-6 py-2 rounded-full text-xl w-10/12 cursor-pointer scale-105'
                  : 'bg-indigo-600/70 list-none my-4 px-6 py-2 rounded-full text-xl w-10/12 hover:bg-slate-300/70 hover:cursor-pointer hover:scale-105 duration-300 hover:text-[#4a4a22cf]'
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
          className="ml-auto bg-[#0C5500] w-1/6 py-2 px-4 rounded-full text-xl tracking-widest"
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
