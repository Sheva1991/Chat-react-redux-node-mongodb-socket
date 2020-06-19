import React from 'react';
import AuthPage from './pages/AuthPage/AuthPage';
import { Route } from 'react-router';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <div className="wrapper">
      <Route exact path={['/', '/login', '/registration']} component={AuthPage} />
      <Route exact path='/im' component={HomePage} />
    </div>
  );
}

export default App;
