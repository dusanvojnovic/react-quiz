import { createContext } from 'react';

const OptionContext = createContext({
  difficulty: null,
  setDifficulty: (diff) => {},
});

export default OptionContext;
