import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "./registration.component";

const route = [{
    path: '',
    component: RegistrationComponent,
}] as Routes;
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
  })
  export class RegistrationRoutingModule { }