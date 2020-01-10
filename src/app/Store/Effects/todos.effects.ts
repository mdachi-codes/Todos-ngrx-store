import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { TodosService } from "./../../services/todos.service";

@Injectable()
export class MovieEffects {
  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Home Page] GetTodos"),
      mergeMap(() =>
        this.todosService.getTodos().pipe(
          map(todos => ({
            type: "[Home Page] GetTodosSuccess",
            payload: todos
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
