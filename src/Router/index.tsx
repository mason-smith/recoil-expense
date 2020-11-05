import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Local Dependencies
import { Navigation } from 'src/components/Navigation';
import { Expenses } from 'src/features/Expenses';
import { TodoList } from 'src/features/TodoList';
import { LoginPage } from 'src/features/Authentication';

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <TodoList />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/expenses">
            <Expenses />
          </Route>
        </Switch>
      </>
    </Router>
  );
};
