import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo.model";
//import { type } from "os";

export const getTodosAction = createAction("[Home Page] GetTodos");
export const getTodosSuccessAction = createAction(
  "[Home Page] GetTodosSuccess"
);
export const getTodosFailureAction = createAction(
  "[Home Page] GetTodosFailure"
);

export const addTodoAction = createAction(
  "[Home Page] AddTodo",
  props<{ todo: Todo }>()
);
export const addTodoSuccessAction = createAction("[Home Page] AddTodoSuccess");
export const addTodoFailureAction = createAction("[Home Page] AddTodoFailure");

export const deleteTodoAction = createAction("[Home Page] DeleteTodo");
export const deleteTodoSuccessAction = createAction("[Home Page] DeleteTodo");
export const deleteTodoFailureAction = createAction("[Home Page] DeleteTodo");
