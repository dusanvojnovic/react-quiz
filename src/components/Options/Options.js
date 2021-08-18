import Button from '../Button/Button';
import classes from './Options.module.css';

const Options = () => {
  return (
    <div className={classes.buttons}>
      <Button text="EASY"></Button>
      <Button text="NORMAL"></Button>
      <Button text="HARD"></Button>
    </div>
  );
};

export default Options;
