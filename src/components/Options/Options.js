import { useContext } from 'react';

import OptionContext from '../../store/option-context';
import Button from '../Button/Button';
import classes from './Options.module.css';

const Options = () => {
  const optCtx = useContext(OptionContext);

  return (
    <div className={classes.buttons}>
      <Button
        text="easy"
        onButtonClicked={() => optCtx.setDifficulty(60)}
      ></Button>
      <Button
        text="normal"
        onButtonClicked={() => optCtx.setDifficulty(45)}
      ></Button>
      <Button
        text="hard"
        onButtonClicked={() => optCtx.setDifficulty(30)}
      ></Button>
    </div>
  );
};

export default Options;
