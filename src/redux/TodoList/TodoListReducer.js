import * as Constants from '../../common/Constants';

const initId = 2;

const initialState = [
   {
      id: 1,
      title : 'Phase 1',
      completed : true
   },
   {
      id: 2,
      title : 'Phase 2',
      completed : false
   }
];

export function TodoReducer(state = initialState, action){
   switch (action.type){
      case Constants.ADD_TODO :
         return [...state, {id: ++initId, completed:false, ...action.payload}];
      case Constants.UPDATE_TODO :
         return state.map(todo =>{
            if(todo.id == action.payload.id){
               return {...todo, ...action.payload};
            }else{
               return todo;
            }
         })
      case Constants.DELETE_TODO :
         return state.filter(todo => todo.id != action.payload)
      default :
         return state;
   }
}