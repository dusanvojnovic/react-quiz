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
            <Quiz section="23" bgColor="#8272AA" />
          </Route>
          <Route path="/geography">
            <Quiz section="22" bgColor="#97BF9D" />
          </Route>
          <Route path="/sport">
            <Quiz section="21" bgColor="#9E9E9E" />
          </Route>
          <Route path="/movies">
            <Quiz section="11" bgColor="#CCBB75" />
          </Route>
          <Route path="/music">
            <Quiz section="12" bgColor="#B27676" />
          </Route>
          <Route path="/general">
            <Quiz section="9" bgColor="#93B7BC" />
          </Route>
        </Switch>
      </OptionProvider>
    </div>
  );
};

export default App;
