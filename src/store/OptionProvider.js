import { useReducer } from 'react';

import OptionContext from './option-context';

const defaultState = {
  secondsLeft: null,
};

const optionReducer = (state, action) => {
  if (action.type === 'EASY') {
    const secRemaining = state.secondsLeft + action.diff;
    return {
      secondsLeft: secRemaining,
    };
  }
  return defaultState;
};

const OptionProvider = (props) => {
  const [optionState, dispatchOptionAction] = useReducer(
    optionReducer,
    defaultState
  );

  const setDifficultyEasyHandler = (diff) => {
    dispatchOptionAction({ type: 'EASY', diff: diff });
  };

  const setDifficultyNormalHandler = (diff) => {
    dispatchOptionAction({ type: 'NORMAL', diff: diff });
  };

  const setDifficultyHardHandler = (diff) => {
    dispatchOptionAction({ type: 'HARD', diff: diff });
  };

  const optionCtx = {
    difficulty: optionState.secondsLeft,
    setDifficultyEasy: setDifficultyEasyHandler,
    setDifficultyNormal: setDifficultyNormalHandler,
    setDifficultyHard: setDifficultyHardHandler,
  };

  return (
    <OptionContext.Provider value={optionCtx}>
      {props.children}
    </OptionContext.Provider>
  );
};

export default OptionProvider;
