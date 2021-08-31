import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Button from '../Button/Button';
import classes from './Modal.module.css';
// import OptionContext from '../../store/option-context';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.goToHomePage} />;
};

const ModalOverlay = (props) => {
  // const optCtx = useContext(OptionContext);

  const history = useHistory();

  const goToHomePage = () => {
    history.push('/');
  };

  // const resetGame = () => {
  //   window.location.reload();
  //   optCtx.setPrevDiff();
  // };

  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
      {/* <div className={classes.buttonsModal}> */}
      {/* <Button onButtonClicked={resetGame} text="Play Again" /> */}
      {/* <Button onButtonClicked={() => goToHomePage} text="Go to HomePage" /> */}
    </div>
    // </div>
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
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
