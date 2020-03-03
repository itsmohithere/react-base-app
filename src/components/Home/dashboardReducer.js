const initialState = {
  menuItem: ['Graph 1', 'Graph 2', 'Graph 3']
}

function dashboardReducer(state= initialState, action) {
  switch (action.type) {
    case 'updateMenuItem':
      return {
        ...state,
        menuItem:[...state.menuItem, 'Graph 4']
      }
  
    default:
      return {
        ...state
      }
  }
}

export default dashboardReducer;
