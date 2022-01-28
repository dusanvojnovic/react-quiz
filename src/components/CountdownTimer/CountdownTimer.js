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
    <>
      <div className={classes.seconds}>
        {secondsRemaining < 10 && <p>0{secondsRemaining}</p>}
        {secondsRemaining >= 10 && <p>{secondsRemaining}</p>}
      </div>
      {showModal && questionNumber < 11 && (
        <Modal
          header="TIME IS UP!"
          footer={
            <div className={classes.buttonsModal}>
              <Button onButtonClicked={() => goToHomePage()} text="Home Page" />
            </div>
          }
        >
          <div className={classes.modalContent}>
            <h3>
              You had {correctAnswers} correct{' '}
              {correctAnswers > 1 ? 'answers!' : 'answer!'}
            </h3>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CountdownTimer;
