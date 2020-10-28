import {combineReducers, createStore} from 'redux';
import {TodoReducer} from './TodoList/TodoListReducer'

// STORE

export default createStore(
   combineReducers({
      todos : TodoReducer,
      filter: (state = 0, action) => state // example of 2nd reducer
   }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)