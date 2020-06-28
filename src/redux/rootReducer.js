const initialState = {
  articles: [],
  companyName: 'Text'
};

function rootReducer(state = initialState, action) {
  
  const updatedState = action.payLoad;
  switch (action.type) {
    
    case 'changeName':
      return {
        ...state,
        companyName: updatedState
      }
  
    default:
      return {...state}
  }
};
export default rootReducer;