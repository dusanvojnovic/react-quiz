import { Route, Switch } from 'react-router-dom';

import historyImg from '../assets/history.jpg';
import geographyImg from '../assets/geography.jpg';
import sportImg from '../assets/sport.jpg';
import moviesImg from '../assets/movies.jpg';
import musicImg from '../assets/music.jpg';
import generalImg from '../assets/general.jpg';

import AvailableSections from './AvailableSections/AvailableSections';
import Header from './Header/Header';
import Quiz from './Quiz/Quiz';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <AvailableSections />
        </Route>
        <Route path="/history">
          <Quiz section="23" imagePath={historyImg} />
        </Route>
        <Route path="/geography">
          <Quiz section="22" imagePath={geographyImg} />
        </Route>
        <Route path="/sport">
          <Quiz section="21" imagePath={sportImg} />
        </Route>
        <Route path="/movies">
          <Quiz section="11" imagePath={moviesImg} />
        </Route>
        <Route path="/music">
          <Quiz section="12" imagePath={musicImg} />
        </Route>
        <Route path="/general">
          <Quiz section="9" imagePath={generalImg} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
