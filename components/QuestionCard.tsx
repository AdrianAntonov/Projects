// type TQuestionCard = {
//   correctAnswer: string;
//   incorrectAnswers: string[];
//   question: string;
//   id: number;
// };
import { useState } from 'react';

function QuestionCard(props: any) {
  const [questNum, setQuestNum] = useState(0);
  const [score, setScore] = useState(0);
  const [color, setColor] = useState('bg-red-400');

  const { questions } = props;
  console.log(questNum);
  const arrShuflle = (arr: []) => {
    return arr?.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (answer: string, correct: string) => {
    if (answer === correct) {
      console.log('CORRECT!');
      setColor('bg-skin-primary');
      setScore((prev) => prev + 1);
    } else {
      console.log('WRONG!');
      setColor('bg-white');
    }
    setQuestNum((prev) => prev + 1);
    // if (questNum === questions.length - 1) {
    //   alert('No more questions!');
    //   return;
    // }
  };
  console.log(questNum);
  return (
    <div>
      <h1>QuestionCard</h1>
      <div>{score}</div>
      <p>{questions[questNum]?.question}</p>
      <div>
        {arrShuflle(
          questions[questNum]?.incorrectAnswers.concat(
            questions[questNum]?.correctAnswer
          )
        )?.map((question: any) => (
          <li
            key={question}
            onClick={() =>
              handleAnswer(question, questions[questNum]?.correctAnswer)
            }
            className={color}
          >
            {question}
          </li>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
