import { cloneDeep } from "lodash"
import { v4 as uuidv4 } from 'uuid'

export const withSelectedDashboard = (oldAppState, dashboardId) => {
    const newAppState = cloneDeep(oldAppState)
    newAppState.editedDashboardId = dashboardId
    return newAppState
}

export const withRenamedDashboard = (oldAppState, dashboardId, newName) => {
    const newAppState = cloneDeep(oldAppState)
    newAppState.dashboards.forEach(dashboard => {
        if (dashboard.id === dashboardId) dashboard.name = newName
    })
    newAppState.editedDashboardId = null
    return newAppState
}

export const withNewDashboard = (oldAppState) => {
    const newAppState = cloneDeep(oldAppState)
    const newDashboard = { id: uuidv4(), name: "", todos: [] }
    newAppState.dashboards.push(newDashboard)
    return newAppState
}

export const withoutDashboard = (oldAppState, dashboardId) => {
    const newAppState = cloneDeep(oldAppState)
    newAppState.dashboards = newAppState.dashboards.filter(dashboard => dashboard.id !== dashboardId)
    return newAppState
}

export const withSelectedTodo = (oldAppState, todoId) => {
    const newAppState = cloneDeep(oldAppState)
    newAppState.editedTodoId = todoId
    return newAppState
}

export const withNewTodo = (oldAppState, dashboardId) => {
    const newAppState = cloneDeep(oldAppState)
    const newTodo = { id: uuidv4(), name: "", description: "" }
    newAppState.dashboards.forEach(dashboard => {
        if (dashboard.id === dashboardId)
            dashboard.todos.push(newTodo)
    })
    return newAppState
}

export const withoutTodo = (oldAppState, todoId) => {
    const newAppState = cloneDeep(oldAppState)
    newAppState.dashboards.forEach(dashboard => {
        dashboard.todos = dashboard.todos.filter(todo => todo.id !== todoId)
    })
    return newAppState
}

export const withModifiedTodo = (oldAppState, todoId, newName, newDescription) => {
    const newAppState = cloneDeep(oldAppState)
    newAppState.dashboards.forEach(dashboard => {
        dashboard.todos.forEach(todo => {
            if (todo.id === todoId) {
                todo.name = newName
                todo.description = newDescription
            }
        })
    })
    newAppState.editedTodoId = null
    return newAppState
}