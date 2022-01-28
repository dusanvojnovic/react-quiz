import { useState } from 'react';

import classes from './Header.module.css';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <header className={classes.header}>
        <Link className={classes.brand} to="/">
          <h3>My Stupid Quiz</h3>
        </Link>
        <Link className={classes.brand} onClick={openModalHandler} to="">
          <h3>How to Play?</h3>
        </Link>
      </header>
      {openModal && (
        <Modal
          goToHomePage={closeModalHandler}
          header="Choose level"
          footer="Good luck!"
        >
          <div className={classes.options}>
            <div className={classes.content}>
              <ul className={classes.optionsList}>
                <li>easy (60 seconds)</li>
                <li>normal (45 seconds)</li>
                <li>hard (30 seconds)</li>
              </ul>
              <p>then choose section and test your knowledge</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Header;
