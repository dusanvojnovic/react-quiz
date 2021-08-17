import classes from './Button.module.css';

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onButtonClicked}
        value={props.text}
        className={classes.button}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
