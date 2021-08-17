import { useState, useEffect } from 'react';

const CountdownTimer = (props) => {
  const [secondsRemaining, setSecondsRemaining] = useState(5);

  useEffect(() => {
    if (secondsRemaining === 0) {
      props.getNextQuestion();
    }

    const intervalId = setInterval(() => {
      setSecondsRemaining(secondsRemaining - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsRemaining, props]);

  return (
    <div>
      <p>0{secondsRemaining}</p>
    </div>
  );
};

export default CountdownTimer;
