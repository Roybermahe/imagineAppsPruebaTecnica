import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";

const route = [{
    path: '',
    component: HomeComponent,
}] as Routes;
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }