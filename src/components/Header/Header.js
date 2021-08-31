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
          <h3>How to Play</h3>
        </Link>
      </header>
      {openModal && (
        <Modal goToHomePage={closeModalHandler}>
          <div className={classes.instructions}>
            <div>
              <h5>Choose level between</h5>
              <h6>easy (60 seconds)</h6>
              <h6>normal (45 seconds)</h6>
              <h6>hard (30 seconds)</h6>
              <h5>then choose section and test your knowledge.</h5>
              <h3>Good luck!</h3>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Header;
