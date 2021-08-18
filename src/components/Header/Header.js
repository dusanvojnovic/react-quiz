import classes from './Header.module.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <Link className={classes.brand} to="/">
          <h3>My Stupid Quiz</h3>
        </Link>
        <Link className={classes.brand} to="/instrucions">
          <h3>How to Play</h3>
        </Link>
      </header>
    </div>
  );
};

export default Header;
