import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.route";
import { AllPostComponent } from './all-post/all-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { MyPostComponent } from './my-post/my-post.component';

@NgModule({
    declarations: [
        HomeComponent,
        AllPostComponent,
        CreatePostComponent,
        MyPostComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        HomeRoutingModule
    ],
    bootstrap: [HomeComponent]
})
export class HomeModule {}