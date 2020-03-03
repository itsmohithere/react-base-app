import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../HOCs/ConfigureCTX';

function Login(props) {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);

  const logoutHandler = () => {
    dispatch({  type: 'doLogin', data: { tk: '123ENC@eij3', history }})
  }

  return (
      <div>
        <h1>Login Page</h1>
        <button onClick={logoutHandler} >Login</button>
      </div>
    );
}

export default Login;
