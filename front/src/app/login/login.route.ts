import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { NgModule } from "@angular/core";

const route = [{
    path: '',
    component: LoginComponent,
}] as Routes;
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { }