import SectionCard from '../SectionCard/SectionCard';
import classes from './QuizSections.module.css';
import { Link } from 'react-router-dom';

import Options from '../Options/Options';
import history from '../../assets/history.png';
import general from '../../assets/general.png';
import geography from '../../assets/geography.png';
import movies from '../../assets/movies.png';
import music from '../../assets/music.png';
import sport from '../../assets/sport.png';

const QuizSections = () => {
  return (
    <>
      <div className={classes.title}>
        <h1>Welcome to my stupid quiz, choose section!</h1>
      </div>
      <Options />
      <div className={classes.sections}>
        <Link to="/history" style={{ textDecoration: 'none', color: 'black' }}>
          <SectionCard sectionName="History" imagePath={history} />
        </Link>
        <Link to="/general" style={{ textDecoration: 'none', color: 'black' }}>
          <SectionCard sectionName="General" imagePath={general} />
        </Link>
        <Link
          to="/geography"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <SectionCard sectionName="Geography" imagePath={geography} />
        </Link>
        <Link to="/music" style={{ textDecoration: 'none', color: 'black' }}>
          <SectionCard sectionName="Music" imagePath={music} />
        </Link>
        <Link to="/sport" style={{ textDecoration: 'none', color: 'black' }}>
          <SectionCard sectionName="Sport" imagePath={sport} />
        </Link>
        <Link to="/movies" style={{ textDecoration: 'none', color: 'black' }}>
          <SectionCard sectionName="Movies" imagePath={movies} />
        </Link>
      </div>
    </>
  );
};

export default QuizSections;
