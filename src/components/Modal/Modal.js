import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Button from '../Button/Button';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  const history = useHistory();

  const goToHomePage = () => {
    history.push('/');
  };
  return <div className={classes.backdrop} onClick={goToHomePage} />;
};

const ModalOverlay = (props) => {
  const history = useHistory();

  const goToHomePage = () => {
    history.push('/');
  };

  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
      <div className={classes.buttons}>
        <Button
          onButtonClicked={() => window.location.reload()}
          text="Play Again"
        />
        <Button onButtonClicked={() => goToHomePage()} text="Go to HomePage" />
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
