import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import DashboardPage from './page/DashboardPage';
import Page404 from './page/Page404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/home', '/', '/dashboard']}>
          <LoginPage />
        </Route>
        <Route path="/dashboard/:id">
          <DashboardPage />
        </Route>
        <Route path="/dashboard">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;