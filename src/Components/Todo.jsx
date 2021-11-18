import { useState } from "react";

const Todo = ({ todo, editedTodoId, selectTodo, deleteTodo, modifyTodo }) => {

  const [ todoNameInputVal, setTodoNameInputVal ] = useState(todo.name)
  const [ todoDescInputVal, setTodoDescInputVal ] = useState(todo.description)

    return (
      <div className="Todo">
          {
            editedTodoId !== todo.id ?
            <h2>{ todo.name ? todo.name : "Untitled todo"}</h2> :
            <input value={todoNameInputVal} onChange={e => setTodoNameInputVal(e.target.value)} />
          }
          <hr />
          {
            editedTodoId !== todo.id ?
            <p>{ todo.description ? todo.description : "-" }</p> :
            <input value={todoDescInputVal} onChange={e => setTodoDescInputVal(e.target.value)}  />
          }
          <hr />
          {
            editedTodoId !== todo.id ?
            <button onClick={() => selectTodo(todo.id)}>Edit</button> :
            <span>
              <button onClick={() => selectTodo(null)}>Cancel</button>
              <button onClick={() => modifyTodo(todo.id, todoNameInputVal, todoDescInputVal)}>Save</button>
            </span>
          }
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    );
  }
  
  export default Todo;
  