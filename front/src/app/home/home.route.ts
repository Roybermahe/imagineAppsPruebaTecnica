import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { AllPostComponent } from "./all-post/all-post.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { MyPostComponent } from "./my-post/my-post.component";

const route = [{
    path: '',
    component: HomeComponent,
}, {
    path: 'all-post',
    component: AllPostComponent
},
{
    path: 'create-post',
    component: CreatePostComponent
},
{
    path: 'my-post',
    component: MyPostComponent
}] as Routes;
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }