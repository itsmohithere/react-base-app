import React, { useEffect } from 'react';
import { LogoutButton } from '../../commonComponents';
import { useSelector, useDispatch } from 'react-redux'

import './Home.css';
import { apiInstance } from '../../axiosConfig/apiService';
import { dashboardActions } from './dashboardReducer';
// import { instance } from '../../axiosConfig/axiosInstance';

function Home() {
  const state = useSelector(state => state);
  console.log(state)
  const dispatch = useDispatch();

  useEffect(()  =>  {
    const payLoad = {
      url: '/todos/1',
      action: dashboardActions.TODO
    }
    dispatch({ type: 'API_CALL', payLoad })
    // console.log(apiInstance.);
    // apiInstance('/todos/1')
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => {
    //   console.log({err})
    // })

    // apiInstance.del  ete();
  },[]);

  const test = () => {
    // dispatch({type: 'PUSH_BUTTON', payLoad: 'Pop'});
    dispatch({type: 'updateMenuItem'})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ state.rootReducer.companyName }</h1>
        {
          state.dashboardReducer.menuItem.map((graphName)  =>  {
            return(
              <span key={graphName}>{ graphName }</span>
            );
          })
        }

        <button onClick={test} >reduxTest</button>
        <LogoutButton className="logoutFooter" />
      </header>
    </div>
  );
}

export default Home;
