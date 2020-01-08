import { Injectable } from "@angular/core";
import { NgxDhis2HttpClientService } from "@iapps/ngx-dhis2-http-client";
import { Observable, of } from "rxjs";
import { Todo } from "../models/todo.model";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  constructor(private http: NgxDhis2HttpClientService) {}

  todosURL: string = "dataStore/Todoslist";

  newId: string;

  getTodos() {
    return this.http.get(this.todosURL);
  }

  getTodo(id: string) {
    return this.http.get(this.todosURL + "/" + id);
  }

  addTodo(todo: Todo) {
    /*
      --- ADD CODE TO GENERATE ID ----
    */

    return this.http.post(this.todosURL + "/" + this.newId, todo);
  }

  deleteTodo(id: string) {
    return this.http.delete(this.todosURL + "/" + id);
  }
}
