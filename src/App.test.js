import App from './App';
import { withSelectedTodo, withRenamedDashboard } from './Producers/appStateProducers';

test('select dashboard', () => {

  // given
  const initialState = {
    editedDashboardId: null,
    editedTodoId: null,
    dashboards: [
      {
        id: 1,
        name: "Bevásárlás",
        todos: [
          { id: 2, name: "Lidl", description: "Tej, kenyér" },
          { id: 3, name: "Decathlon", description: "Kosárlabda" },
          { id: 4, name: "Media Markt", description: "Laptop" },
        ]
      },
      {
        id: 5,
        name: "Tanulás",
        todos: [
          { id: 6, name: "Codecool", description: "React, jest" },
          { id: 7, name: "Egyetem", description: "Vezetésszervezés" },
        ]
      },
    ]
  }

  // when
  const nextState = withSelectedTodo(initialState, 1)

  // then
  const expectedState = {
    editedDashboardId: 1,
    editedTodoId: null,
    dashboards: [
      {
        id: 1,
        name: "Bevásárlás",
        todos: [
          { id: 2, name: "Lidl", description: "Tej, kenyér" },
          { id: 3, name: "Decathlon", description: "Kosárlabda" },
          { id: 4, name: "Media Markt", description: "Laptop" },
        ]
      },
      {
        id: 5,
        name: "Tanulás",
        todos: [
          { id: 6, name: "Codecool", description: "React, jest" },
          { id: 7, name: "Egyetem", description: "Vezetésszervezés" },
        ]
      },
    ]
  }
  expect(nextState).toStrictEqual(expectedState)
  expect(nextState).not.toBe(initialState)
});

test('rename dashboard', () => {

  // given
  const initialState = {
    editedDashboardId: 1,
    editedTodoId: null,
    dashboards: [
      {
        id: 1,
        name: "Bevásárlás",
        todos: [
          { id: 2, name: "Lidl", description: "Tej, kenyér" },
          { id: 3, name: "Decathlon", description: "Kosárlabda" },
          { id: 4, name: "Media Markt", description: "Laptop" },
        ]
      },
      {
        id: 5,
        name: "Tanulás",
        todos: [
          { id: 6, name: "Codecool", description: "React, jest" },
          { id: 7, name: "Egyetem", description: "Vezetésszervezés" },
        ]
      },
    ]
  }

  // when
  const nextState = withRenamedDashboard(initialState, 1, "Boltba menés")

  // then
  const expectedState = {
    editedDashboardId: null,
    editedTodoId: null,
    dashboards: [
      {
        id: 1,
        name: "Boltba menés",
        todos: [
          { id: 2, name: "Lidl", description: "Tej, kenyér" },
          { id: 3, name: "Decathlon", description: "Kosárlabda" },
          { id: 4, name: "Media Markt", description: "Laptop" },
        ]
      },
      {
        id: 5,
        name: "Tanulás",
        todos: [
          { id: 6, name: "Codecool", description: "React, jest" },
          { id: 7, name: "Egyetem", description: "Vezetésszervezés" },
        ]
      },
    ]
  }
  expect(nextState).toStrictEqual(expectedState)
  expect(nextState).not.toBe(initialState)
});
