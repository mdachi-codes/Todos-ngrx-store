import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo.model";
//import { type } from "os";

export const getTodosAction = createAction("[Home Page] Get Todos");

export const addTodoAction = createAction(
  "[Home Page] Add Todo",
  props<{ payload: Todo }>()
);

export const deleteTodoAction = createAction("[Home Page] Delete Todo");
