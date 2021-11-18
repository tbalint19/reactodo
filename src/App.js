import './App.css';
import { useState } from 'react';

import Dashboard from './Components/Dashboard';
import {
  withSelectedDashboard,
  withSelectedTodo,
  withRenamedDashboard,
  withNewDashboard,
  withoutDashboard,
  withNewTodo,
  withoutTodo,
  withModifiedTodo,
} from './Producers/appStateProducers';

const initialState = {
  editedDashboardId: null,
  editedTodoId: null,
  dashboards: [ ]
}

const App = () => {

  const [ appState, setAppState ] = useState(initialState)

  const selectDashboard = (dashboardId) => {
    setAppState(withSelectedDashboard(appState, dashboardId))
  }

  const renameDashboard = (dashboardId, newName) => {
    setAppState(withRenamedDashboard(appState, dashboardId, newName))
  }

  const createDashboard = () => {
    setAppState(withNewDashboard(appState))
  }

  const deleteDashboard = (dashboardId) => {
    setAppState(withoutDashboard(appState, dashboardId))
  }

  const selectTodo = (todoId) => {
    setAppState(withSelectedTodo(appState, todoId))
  }

  const createTodo = (dashboardId) => {
    setAppState(withNewTodo(appState, dashboardId))
  }

  const deleteTodo = (todoId) => {
    setAppState(withoutTodo(appState, todoId))
  }

  const modifyTodo = (todoId, newName, newDescription) => {
    setAppState(withModifiedTodo(appState, todoId, newName, newDescription))
  }

  return (
    <div className="App">
      { appState.dashboards.map(dashboard => (
        <div key={dashboard.id} className="Dashboard-container">
          <Dashboard
            dashboard={dashboard}
            editedDashboardId={appState.editedDashboardId}
            editedTodoId={appState.editedTodoId}
            selectDashboard={selectDashboard}
            renameDashboard={renameDashboard}
            deleteDashboard={deleteDashboard}
            selectTodo={selectTodo}
            createTodo={createTodo}
            deleteTodo={deleteTodo}
            modifyTodo={modifyTodo}/>
        </div>
      )) }

      <button onClick={createDashboard} id="newtodo">+</button>
    </div>
  );
}

export default App;
