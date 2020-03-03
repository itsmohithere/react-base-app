import React, { useContext } from 'react';
import {  Route, Redirect  } from "react-router-dom";
import {AppContext} from '../../HOCs/ConfigureCTX';

function PrivateRoute({ component: Component, isAnonymous, ...rest }) {
  
  const { state: { isUserLogged } } = useContext(AppContext);
  console.log({isUserLogged})
  function renderCondition(props) {
    if ( !isUserLogged && isAnonymous) {
      return <Component {...props} />
    } else if (isUserLogged) {
      return <Component {...props} />
    }
    return <Redirect to='login' />
  }
  return (
    <Route
      {...rest}
      render={renderCondition}
    />
  );
}

function PublicRoute({ component: Component, ...rest }) {
  const { state: { isUserLogged } } = useContext(AppContext);

  function renderCondition(props) {
    if (isUserLogged) return <Redirect to='/' /> ;
    return <Component {...props} /> ;
  }

  return (
    <Route
      {...rest}
      render={renderCondition}
    />
  );
}

export {PrivateRoute, PublicRoute};
