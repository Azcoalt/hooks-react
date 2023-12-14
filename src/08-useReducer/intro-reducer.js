// console.log('Hello World');

//Estado inicial
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];

//Reducer
const todoReducer = ( state = initialState, action = {}) => {

    if(action.type === '![TODO] add todo'){
        return [ ...state,action.payload];
    }
    return state;
};

let todos = todoReducer();

const newTodo = {
    id:2,
    todo: 'Recolectar la piedra del poder',
    done: false
};

const addTodosActions = {
    type: '![TODO] add todo',
    payload: newTodo,
};

todos = todoReducer(todos,addTodosActions);
console.log({state: todos});