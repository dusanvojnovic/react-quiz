import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { decode } from 'html-entities';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import classes from './Quiz.module.css';
import OptionContext from '../../store/option-context';

const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);
  let [questionIndex, setQuestionIndex] = useState(0);
  let [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);

  const optCtx = useContext(OptionContext);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${props.section}&type=boolean`
      );

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const responseData = await response.json();

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

  const questionsList = questions.map((question) => decode(question.question));

  const correctAnswers = questions.map((question) => question.correctAnswer);

  const onButtonClicked = (correctAnswer, answer) => {
    if (correctAnswer === answer) {
      setNumOfCorrectAnswers(numOfCorrectAnswers + 1);
    }
    setQuestionIndex((questionIndex = questionIndex + 1));
  };

  const history = useHistory();

  const goToHomePage = () => {
    history.push('/');
  };

  return (
    <div>
      <div className={classes.mainSection}>
        <h1>
          {questionIndex + 1 < 11 ? (
            `Question number ${questionIndex + 1}`
          ) : (
            <Modal
              header="GAME OVER"
              footer={
                <div className={classes.buttonsModal}>
                  <Button
                    onButtonClicked={() => goToHomePage()}
                    text="Home Page"
                  />
                </div>
              }
            >
              <h3>
                {' '}
                You had {numOfCorrectAnswers} correct{' '}
                {numOfCorrectAnswers > 1 ? 'answers!' : 'answer!'}
              </h3>
            </Modal>
          )}
        </h1>

        <CountdownTimer
          correctAnswers={numOfCorrectAnswers}
          secondsLeft={optCtx.difficulty}
          questionNumber={questionIndex + 1}
        />

        <h2>{questionIndex + 1 < 11 && questionsList[questionIndex]}</h2>

        <div className={classes.buttons}>
          <Button
            text="true"
            onButtonClicked={() =>
              onButtonClicked(correctAnswers[questionIndex], 'True')
            }
          />
          <Button
            onButtonClicked={() =>
              onButtonClicked(correctAnswers[questionIndex], 'False')
            }
            text="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
