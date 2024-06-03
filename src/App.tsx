import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import ItemDetails from './pages/ItemDetails';
import PratoDoDia from './pages/PratoDoDia';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:category" component={Category} />
        <Route path="/item-details/:category/:index" component={ItemDetails} />
        <Route path="/prato-do-dia" component={PratoDoDia} />
      </Switch>
    </Router>
  );
};

export default App;