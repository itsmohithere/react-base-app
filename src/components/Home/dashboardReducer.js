export const dashboardActions = {
  TODO: 'TODO'
}

const initialState = {
  menuItem: ['Graph 1', 'Graph 2', 'Graph 3'],
  todoData: []
}

function dashboardReducer(state= initialState, action) {
  const { payLoad } = action;

  switch (action.type) {
    case 'updateMenuItem':
      return {
        ...state,
        menuItem:[...state.menuItem, 'Graph 4']
      }
    case `${dashboardActions.TODO}_FULLFILLED`:
      console.log('todo', {action})
      return {
        ...state,
        todoData: payLoad
      }
  
    default:
      return {
        ...state
      }
  }
}

export default dashboardReducer;
