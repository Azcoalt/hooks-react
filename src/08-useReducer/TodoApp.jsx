import { TodoList } from "./TodoList";
import { TodoFrom } from "./TodoFrom";
import { useTodos } from "./useTodos";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const {todos,handleDeleteTodo,handleNewTodo,onhandleToggelTodo,todosCount,pendingTodosCount} = useTodos(initialState,init);

  return (
    <>
        <h1>TodoApp: {todosCount} <small>pendientes: {pendingTodosCount}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                {/* Todo list */}
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={onhandleToggelTodo}/>
                {/*fin Todo list */}       
            </div>
            <div className="col-5">
                <h4>Agregar Todo</h4>
                <hr />
                {/*TodoFrom*/}
                    <TodoFrom onNewTodo={handleNewTodo}/>
                {/*TodoFrom end*/}
            </div>
        </div>

        
    </>
  )
}
