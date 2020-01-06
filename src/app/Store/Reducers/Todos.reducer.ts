import * as HomePageActions from "../Actions/todos.action";
import { AppStateInterface } from "src/app/models/appState.model";
import { createReducer, on, Action } from "@ngrx/store";

const initialState: AppStateInterface = {
  todos: [
    {
      activity: "walk the dog",
      done: true
    },
    {
      activity: "get food",
      done: false
    },
    {
      activity: "do homework",
      done: false
    }
  ]
};

const todosReducer = createReducer(
  initialState,
  on(HomePageActions.getTodosAction, state => {
    return state;
  }),
  on(HomePageActions.addTodoAction, (state, { activity, done }) => {
    //console.log("i get here", activity, done);
    [...state.todos, { activity: activity, done: done }];
    return state;
  }),
  on(HomePageActions.deleteTodoAction, state => {
    return state;
  })
);

export function reducer(state: AppStateInterface, action: Action) {
  return todosReducer(state, action);
}
