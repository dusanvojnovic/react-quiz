import classes from './SectionCard.module.css';

const SectionCard = (props) => {
  return (
    <div className={classes.cardSectionContainer}>
      <div className={classes.card} style={{ textDecoration: 'none' }}>
        <p>{props.sectionName}</p>
      </div>
    </div>
  );
};

export default SectionCard;
