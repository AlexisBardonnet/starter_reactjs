import * as Constants from '../../common/Constants';

/* Change checkbox value */
export const toggleTodoAction = (todo) => ({
   type: Constants.UPDATE_TODO,
   payload: {...todo, completed: !todo.completed}
})

/* Delete todo */
export const deleteTodoAction = (todo) => ({
   type: Constants.DELETE_TODO,
   payload: todo.id
})