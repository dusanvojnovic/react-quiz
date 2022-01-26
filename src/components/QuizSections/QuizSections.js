import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import SectionCard from '../SectionCard/SectionCard';
import classes from './QuizSections.module.css';
import Options from '../Options/Options';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import OptionContext from '../../store/option-context';

const QuizSections = () => {
  const optionCtx = useContext(OptionContext);
  const [openModal, setOpenModal] = useState(false);

  const sections = [
    'history',
    'general knowledge',
    'geography',
    'music',
    'sport',
    'movies',
  ];

  const clickOnLink = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  const sectionList = sections.map((section) => (
    <Link
      key={section}
      to={`/${section}`}
      onClick={(event) => !optionCtx.difficulty && clickOnLink(event)}
      style={{ textDecoration: 'none' }}
    >
      <SectionCard sectionName={section} />
    </Link>
  ));

  return (
    <>
      <div className={classes.title}>
        <h1>Welcome to my stupid quiz, choose level and section!</h1>
      </div>
      <Options />
      <div className={classes.sections}>{sectionList}</div>
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
    </>
  );
};

export default QuizSections;
