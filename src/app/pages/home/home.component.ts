import { Component, OnInit } from "@angular/core";
import { TodosService } from "src/app/services/todos.service";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/models/appState.model";
import { Observable } from "rxjs";
import { Todo } from "src/app/models/todo.model";
import { todosSelector } from "src/app/Store/selectors/todos.selector";
import { addTodoAction } from "src/app/Store/Actions/todos.action";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    private todoServices: TodosService,
    private store: Store<AppStateInterface>
  ) {
    this.todosList$ = this.store.select(todosSelector);
    //console.log(this.todosList$);
  }

  public todosList$: Observable<Array<Todo>>;
  public TodoToAdd: Todo = { activity: "some activity", done: true };

  ngOnInit() {}

  addTodo() {
    this.store.dispatch(addTodoAction({ todo: this.TodoToAdd }));
  }
}
