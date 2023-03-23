// type TQuestionCard = {
//   correctAnswer: string;
//   incorrectAnswers: string[];
//   question: string;
//   id: number;
// };
'use client';
import React from 'react';
import { useState, useRef, useEffect } from 'react';

function QuestionCard(props: any) {
  const [questNum, setQuestNum] = useState(0);
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState('');
  // const [color, setColor] = useState('bg-red-400');
  // const ref = useRef(false);

  const { questions } = props;
  // console.log(questNum);

  // React.useEffect(() => {}, [ref]);

  const arrShuflle = React.useMemo(() => {
    return questions[questNum]?.incorrectAnswers
      .concat(questions[questNum]?.correctAnswer)
      ?.sort(() => Math.random() - 0.5);
  }, [questNum, questions]);

  const handleAnswer = (answer: string, correct: string) => {
    if (answer === check) {
      return;
    }
    if (answer === correct) {
      console.log('CORRECT!');
      setCheck(answer);
      // setColor('bg-skin-primary');
      // ref.current = true;
      setScore((prev) => prev + 1);
    } else {
      console.log('WRONG!');
      // setColor('bg-white');
      // ref.current = true;
    }
    // if (questNum === questions.length - 1) {
    //   alert('No more questions!');
    //   return;
    // }
  };

  const toNextQuestion = () => {
    setQuestNum((prev) => prev + 1);
    // ref.current = false;
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
            onClick={() =>
              handleAnswer(question, questions[questNum]?.correctAnswer)
            }
            // className={color}
          >
            {question}
          </li>
        ))}
      </div>

      <button type="button" onClick={toNextQuestion}>
        NEXT
      </button>
    </div>
  );
}

export default QuestionCard;
