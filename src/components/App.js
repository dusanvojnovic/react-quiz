import { Route, Switch } from 'react-router-dom';

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
            <Quiz section="23" />
          </Route>
          <Route path="/geography">
            <Quiz section="22" />
          </Route>
          <Route path="/sport">
            <Quiz section="21" />
          </Route>
          <Route path="/movies">
            <Quiz section="11" />
          </Route>
          <Route path="/music">
            <Quiz section="12" />
          </Route>
          <Route path="/general knowledge">
            <Quiz section="9" />
          </Route>
        </Switch>
      </OptionProvider>
    </div>
  );
};

export default App;
