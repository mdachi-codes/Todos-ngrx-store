import { Injectable } from "@angular/core";
import { NgxDhis2HttpClientService } from "@iapps/ngx-dhis2-http-client";
import { Observable, of } from "rxjs";
import { Todo } from "../models/todo.model";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getTodos() {
    return this.http.get("dataStore/Todos_app/Todoslist");
  }

  getTodo(): Observable<Todo> {
    return of({ activity: "testing", done: true });
  }

  deleteTodo() {}
}
