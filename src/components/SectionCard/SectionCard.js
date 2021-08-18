import classes from './SectionCard.module.css';

const SectionCard = (props) => {
  return (
    <div className={classes.cardSectionContainer}>
      {/* <p>{props.sectionName}</p> */}
      <img
        className={classes.cardImage}
        src={props.imagePath}
        alt={props.name}
      />
    </div>
  );
};

export default SectionCard;
