import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App/App';

const AppRouter = () => (

    <Switch>
      <Route path='/:chapter' component={App}/>
      <Route path='/' component={App}/>
    </Switch>

)

export default AppRouter;
