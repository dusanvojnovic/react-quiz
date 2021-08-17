import SectionCard from '../SectionCard/SectionCard';
import classes from './AvailableSections.module.css';
import { Link } from 'react-router-dom';

import history from '../../assets/history.jpg';
import general from '../../assets/general.jpg';
import geography from '../../assets/geography.jpg';
import movies from '../../assets/movies.jpg';
import music from '../../assets/music.jpg';
import sport from '../../assets/sport.jpg';

const AvailableSections = () => {
  return (
    <div className={classes.sections}>
      <Link to="/history" style={{ textDecoration: 'none', color: 'black' }}>
        <SectionCard sectionName="History" imagePath={history} />
      </Link>
      <Link to="/general" style={{ textDecoration: 'none', color: 'black' }}>
        <SectionCard sectionName="General" imagePath={general} />
      </Link>
      <Link to="/geography" style={{ textDecoration: 'none', color: 'black' }}>
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
  );
};

export default AvailableSections;
