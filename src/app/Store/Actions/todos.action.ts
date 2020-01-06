import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo.model";
//import { type } from "os";

export const getTodosAction = createAction("[Home Page] GetTodos");

export const addTodoAction = createAction(
  "[Home Page] AddTodo",
  props<{ activity: string; done: boolean }>()
);

export const deleteTodoAction = createAction("[Home Page] DeleteTodo");
