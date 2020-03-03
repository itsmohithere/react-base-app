import React from 'react';
import {
  BrowserRouter,
  Switch,
} from "react-router-dom";
import Home from '../Home';
import { PrivateRoute, PublicRoute } from './RoutesConfig';
import Login from '../Login';
import Header from '../Header';
import ConfigureCTX from '../../HOCs/ConfigureCTX';
import { Provider } from 'react-redux'
import store from '../../redux/store';

function AppRoutes(params) {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <PublicRoute exact path='/login' component={Login} />
        <PrivateRoute exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
  
}

function App() {
  return (
    <Provider store={store}>
      <ConfigureCTX>
        <AppRoutes />
      </ConfigureCTX>
    </Provider>
  );
}

export default App;
