import { Injectable } from "@angular/core";
import { NgxDhis2HttpClientService } from "@iapps/ngx-dhis2-http-client";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getTodos() {
    return this.http.get("dataStore/Todos_app/Todoslist");
  }

  addTodo() {}

  deleteTodo() {}
}
