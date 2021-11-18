import { useState } from "react";
import Todo from "./Todo";

const Dashboard = ({
  dashboard, editedDashboardId, editedTodoId, selectDashboard, renameDashboard, deleteDashboard,
  selectTodo, createTodo, deleteTodo, modifyTodo,
}) => {

  const [ dashboardNameInputVal, setDashboardNameInputVal ] = useState(dashboard.name)

  return (
    <div className="Dashboard">
       {
        editedDashboardId !== dashboard.id ?
        <h1>{ dashboard.name ? dashboard.name : "Untitled dashboard" }</h1> :
        <input value={dashboardNameInputVal} onChange={e => setDashboardNameInputVal(e.target.value)}/>
      }
        <hr />
        { dashboard.todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              editedTodoId={editedTodoId}
              selectTodo={selectTodo}
              deleteTodo={deleteTodo}
              modifyTodo={modifyTodo}/>
        )) }
        <hr />
        {
          editedDashboardId !== dashboard.id ?
          <button onClick={() => selectDashboard(dashboard.id)}>Edit</button> :
          <span>
            <button onClick={() => selectDashboard(null)}>Cancel</button>
            <button onClick={() => renameDashboard(dashboard.id, dashboardNameInputVal)}>Save</button>
          </span>
        }
        <button onClick={() => createTodo(dashboard.id)}>Add todo</button>
        <button onClick={() => deleteDashboard(dashboard.id)}>Delete</button>
    </div>
  );
}

export default Dashboard;
