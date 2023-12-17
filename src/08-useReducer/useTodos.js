import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodos = (initialState,init) => {
    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = (todo) =>{
        const action = {
            type:'[TODO] add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) =>{
        //console.log(id)
        dispatch({
            type:'[TODO] Remove Todo',
            payload: id
        })
    }

    const onhandleToggelTodo = (id) =>{
        dispatch({
            type:'[TODO] Toggle Todo',
            payload: id
        })
    }

    return{
        ...todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        onhandleToggelTodo
    }
}
