import React from 'react';
import App from './App';
import Home from './Home';
import Category from './Category';
import { Switch, Route } from 'react-router-dom';

const AppRoutes = (props) => {
  console.log('AppRoute ', props);
  return (
    <Switch>
        <Route path='/' exact component={App} />
        <Route  path='/home' exact component={Home} />
        <Route path='/category' exact component={Category} />
    </Switch>
  );
}

export default AppRoutes;
