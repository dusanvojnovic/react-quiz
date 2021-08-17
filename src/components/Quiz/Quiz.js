import { useState, useEffect } from 'react';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';
// import CountdownTimer from '../CountdownTimer/CountdownTimer';
import classes from './Quiz.module.css';

const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);
  let [questionIndex, setQuestionIndex] = useState(0);
  let [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${props.section}&type=boolean`
      );

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const responseData = await response.json();

      console.log(responseData.results);
      const loadedQuestions = [];

      responseData.results.forEach((el) =>
        loadedQuestions.push({
          question: el.question,
          correctAnswer: el.correct_answer,
        })
      );
      setQuestions(loadedQuestions);
    };

    fetchQuestions();
  }, [props]);

  // const questionsList = questions.map((question) => (
  //   <h2
  //     className={
  //       classes.question + (trueFalseClass ? `-${trueFalseClass}` : '')
  //     }
  //   >
  //     {question.question}
  //   </h2>
  // ));
  const questionsList = questions.map((question) => question.question);

  const correctAnswers = questions.map((question) => question.correctAnswer);

  const onButtonClicked = (correctAnswer, answer) => {
    if (correctAnswer === answer) {
      setNumOfCorrectAnswers(numOfCorrectAnswers + 1);
    }
    setQuestionIndex((questionIndex = questionIndex + 1));
  };

  return (
    <div
      className={classes.mainSection}
      style={{
        background: `url(${props.imagePath}) no-repeat center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <h1>
        {questionIndex + 1 < 11 ? (
          `Question number ${questionIndex + 1}`
        ) : (
          <Modal>THE END You had {numOfCorrectAnswers} correct answers!</Modal>
        )}
      </h1>

      {/* <CountdownTimer
        getNextQuestion={() => setQuestionIndex(questionIndex + 1)}
      /> */}
      <h2>{questionIndex + 1 < 11 && questionsList[questionIndex]}</h2>
      <div className={classes.buttons}>
        <Button
          text="True"
          onButtonClicked={() =>
            onButtonClicked(correctAnswers[questionIndex], 'True')
          }
        />
        <Button
          onButtonClicked={() =>
            onButtonClicked(correctAnswers[questionIndex], 'False')
          }
          text="False"
        />
      </div>
    </div>
  );
};

export default Quiz;
