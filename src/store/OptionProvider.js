import { useState } from 'react';

import OptionContext from './option-context';

const OptionProvider = (props) => {
  const [secLeft, setSecLeft] = useState();

  const setDifficultyHandler = (time) => {
    setSecLeft(time);
  };

  const optionCtx = {
    difficulty: secLeft,
    setDifficulty: setDifficultyHandler,
  };

  return (
    <OptionContext.Provider value={optionCtx}>
      {props.children}
    </OptionContext.Provider>
  );
};

export default OptionProvider;
