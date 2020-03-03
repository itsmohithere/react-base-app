import React, { useEffect } from 'react';
import logo from './logo.svg';
import { LogoutButton } from '../../commonComponents';
import { useSelector, useDispatch } from 'react-redux'

import './Home.css';
import { instance } from '../../axiosConfig/axiosInstance';

function Home() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()  =>  {
    console.log('instance', instance);
  },[]);

  const test = () => {
    dispatch({type: 'PUSH_BUTTON', payLoad: 'Pop'});
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={test} >reduxTest</button>
        <LogoutButton className="logoutFooter" />
      </header>
    </div>
  );
}

export default Home;
