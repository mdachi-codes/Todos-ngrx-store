import { Component, OnInit } from "@angular/core";
import { NgxDhis2HttpClientService } from "@iapps/ngx-dhis2-http-client";
import { TodosService } from "src/app/services/todos.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    private http: NgxDhis2HttpClientService,
    private todoServices: TodosService
  ) {}

  public todosList: Array<{}> = [];

  ngOnInit() {
    this.todoServices.getTodos().subscribe(
      todos => {
        this.todosList = todos;
      },
      error => {}
    );
  }
}
