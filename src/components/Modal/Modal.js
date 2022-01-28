import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.goToHomePage} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <header className={classes.modalHeader}>
        <h2>{props.header}</h2>
      </header>
      <div className={classes.content}>{props.children}</div>
      <footer className={classes.modalFooter}>{props.footer}</footer>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  const history = useHistory();

  const goToHomePage = () => {
    history.push('/');
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop goToHomePage={props.goToHomePage || goToHomePage} />,
        portalElement
      )}
      {ReactDOM.createPortal(<ModalOverlay {...props} />, portalElement)}
    </Fragment>
  );
};

export default Modal;
