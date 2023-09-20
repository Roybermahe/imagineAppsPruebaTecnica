import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.route";

@NgModule({
    declarations: [
        HomeComponent
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