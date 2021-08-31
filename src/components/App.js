import { Route, Switch } from 'react-router-dom';

import historyImg from '../assets/history-bg.png';
import geographyImg from '../assets/geography-bg.png';
import sportImg from '../assets/sport-bg.png';
import moviesImg from '../assets/movies-bg.png';
import musicImg from '../assets/music-bg.png';
import generalImg from '../assets/general-bg.png';

import QuizSections from './QuizSections/QuizSections';
import Header from './Header/Header';
import Quiz from './Quiz/Quiz';
import OptionProvider from '../store/OptionProvider';

const App = () => {
  return (
    <div>
      <OptionProvider>
        <Header />
        <Switch>
          <Route path="/" exact>
            <QuizSections />
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
      </OptionProvider>
    </div>
  );
};

export default App;
