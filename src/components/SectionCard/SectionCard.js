import classes from './SectionCard.module.css';

const SectionCard = (props) => {
  return (
    <div className={classes.cardSectionContainer}>
      <img
        className={classes.cardImage}
        src={props.imagePath}
        alt={props.imagePath}
      />
    </div>
  );
};

export default SectionCard;
