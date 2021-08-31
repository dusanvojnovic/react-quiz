import { useState } from 'react';

import OptionContext from './option-context';

const OptionProvider = (props) => {
  const [secLeft, setSecLeft] = useState();

  const setDifficultyHandler = (time) => {
    setSecLeft(time);
  };

  // const setPrevDiffHandler = () => {
  //   switch (optionCtx.prevDiff) {
  //     case 'easy':
  //       setSecLeft(60);
  //       break;
  //     case 'normal':
  //       setDifficultyNormalHandler();
  //       break;
  //     case 'hard':
  //       setDifficultyHardHandler();
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const optionCtx = {
    difficulty: secLeft,
    // prevDiff: prevDiff,
    setDifficulty: setDifficultyHandler,
    // setPrevDiff: setPrevDiffHandler,
  };

  return (
    <OptionContext.Provider value={optionCtx}>
      {props.children}
    </OptionContext.Provider>
  );
};

export default OptionProvider;
