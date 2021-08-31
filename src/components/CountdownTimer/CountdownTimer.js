import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import classes from './CountdownTimer.module.css';

const CountdownTimer = ({ correctAnswers, secondsLeft, questionNumber }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(secondsLeft);
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const goToHomePage = () => {
    history.push('/');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining((secondsRemaining) => secondsRemaining - 1);
    }, 1000);

    if (secondsRemaining === 0) {
      setShowModal(true);
    }
    return () => clearInterval(intervalId);
  }, [secondsRemaining]);

  return (
    <div className={classes.seconds}>
      {secondsRemaining < 10 && <p>0{secondsRemaining}</p>}
      {secondsRemaining >= 10 && <p>{secondsRemaining}</p>}
      {showModal && questionNumber < 11 && (
        <Modal>
          <h2>TIME IS UP!</h2>
          <h4> You had {correctAnswers} correct answers!</h4>
          <div className={classes.buttonsModal}>
            <Button
              onButtonClicked={() => goToHomePage()}
              text="Go to HomePage"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CountdownTimer;
