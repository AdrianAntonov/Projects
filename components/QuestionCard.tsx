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
      router.push('/result');
    }
    setQuestNum((prev) => prev + 1);
    setCheck('');
  };

  // console.log(questNum);
  return (
    <div>
      <h1>QuestionCard</h1>
      <div>{score}</div>
      <p>{questions[questNum]?.question}</p>
      <div>
        {arrShuflle?.map((question: any) => (
          <li
            key={question}
            onClick={(e) =>
              handleAnswer(question, questions[questNum]?.correctAnswer)
            }
            className={question === check ? 'bg-slate-300/70' : ''}
          >
            {question}
          </li>
        ))}
      </div>

      <button type="button" onClick={toNextQuestion} disabled={check === ''}>
        NEXT
      </button>
    </div>
  );
}

export default QuestionCard;

// if (questNum === questions.length - 1) {
//   alert('No more questions!');
//   return;
// }
