import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgxDhis2HttpClientModule } from "@iapps/ngx-dhis2-http-client";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDhis2HttpClientModule.forRoot({
      namespace: "iapps",
      version: 1,
      models: {}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
