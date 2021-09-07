import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import SectionCard from '../SectionCard/SectionCard';
import classes from './QuizSections.module.css';
import Options from '../Options/Options';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import OptionContext from '../../store/option-context';

import history from '../../assets/history.png';
import general from '../../assets/general.png';
import geography from '../../assets/geography.png';
import movies from '../../assets/movies.png';
import music from '../../assets/music.png';
import sport from '../../assets/sport.png';

const QuizSections = () => {
  const optionCtx = useContext(OptionContext);
  const [openModal, setOpenModal] = useState(false);

  const sections = [
    { img: history, str: '/history' },
    { img: general, str: '/general' },
    { img: geography, str: '/geography' },
    { img: movies, str: '/movies' },
    { img: music, str: '/music' },
    { img: sport, str: '/sport' },
  ];

  const clickOnLink = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  const sectionList = sections.map((section) => (
    <Link
      key={section.str}
      to={section.str}
      onClick={(event) => !optionCtx.difficulty && clickOnLink(event)}
    >
      <SectionCard imagePath={section.img} />
    </Link>
  ));

  return (
    <>
      <div className={classes.title}>
        <h1>Welcome to my stupid quiz, choose level and section!</h1>
      </div>
      <Options />
      <div className={classes.sections}>
        {/* <Link
          to="/history"
          onClick={(event) => !optionCtx.difficulty && clickOnLink(event)}
        >
          <SectionCard imagePath={history} />
        </Link>
        <Link to="/general">
          <SectionCard imagePath={general} />
        </Link>
        <Link to="/geography">
          <SectionCard imagePath={geography} />
        </Link>
        <Link to="/music">
          <SectionCard imagePath={music} />
        </Link>
        <Link to="/sport">
          <SectionCard imagePath={sport} />
        </Link>
        <Link to="/movies">
          <SectionCard imagePath={movies} />
        </Link> */}
        {sectionList}
        {openModal && (
          <Modal
            className={classes.modal}
            goToHomePage={() => setOpenModal(false)}
          >
            <div className={classes.modal}>
              <h3>
                Please, first select difficulty level, and then choose section!{' '}
              </h3>
              <Button
                onButtonClicked={() => setOpenModal(false)}
                text="Go to Home Page"
              ></Button>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default QuizSections;
