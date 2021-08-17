import { useState } from 'react';

import ModalOverlay from '../Modal/Modal';
import Button from '../Button/Button';
import classes from './Header.module.css';

import { Link } from 'react-router-dom';

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <header className={classes.header}>
        <Link className={classes.brand} to="/">
          <h3>My Stupid Quiz</h3>
        </Link>
        <button className={classes.navbarButton} onClick={() => openModal()}>
          How to Play
        </button>
        {modalIsOpen && <ModalOverlay>This is just a test</ModalOverlay>}
      </header>
    </div>
  );
};

export default Header;
