import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/models/appState.model";

export const todoState = (state: AppStateInterface) => state;

export const todosSelector = createSelector(
  todoState,
  (state: AppStateInterface) => state.todos
);
