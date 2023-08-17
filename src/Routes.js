import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import NewContactPage from './Pages/NewContactPage';
import EditContactPage from './Pages/EditContactPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/new" component={NewContactPage} />
      <Route path="/edit/:id" component={EditContactPage} />
    </Switch>
  );
}
