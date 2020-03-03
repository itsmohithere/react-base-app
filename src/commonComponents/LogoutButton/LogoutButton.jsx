import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../HOCs/ConfigureCTX';
import './logout.scss';


function LogoutButton({ className }) {
  const history = useHistory();
  const { dispatch }  = useContext(AppContext);

  const logOutHandler = ()  =>  {
    dispatch({ type: 'doLogout', data: { history } })
  }

  return(
    <React.Fragment>
      <div>
        <button onClick={logOutHandler} className={className} >Logout</button>
      </div>
    </React.Fragment>
  );
}

export default LogoutButton;
