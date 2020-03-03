import React, { createContext, useReducer } from 'react';

const initialState = {
  accessToken: localStorage.getItem('tk'),
  isUserLogged: localStorage.getItem('tk') && true 
}

const reducer = (state, action) => {
  const updatedState  = action.data;
  
  switch (action.type) {
    case 'doLogin':
      localStorage.setItem('tk', updatedState.tk);
      updatedState.history.push('/');
      
      return{
        ...state,
        accessToken: updatedState,
        isUserLogged: true
      }
    case 'doLogout':
      localStorage.clear();
      updatedState.history.push('/login');
      
      return {
        accessToken: '',
        isUserLogged: false
      };
    default:
      return {...state};
  }
}

export const AppContext = createContext();

function ConfigureCTX({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return(
    <AppContext.Provider  value={{  state,  dispatch  }} >
      {children}
    </AppContext.Provider >
  );
}

export default ConfigureCTX;
