import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login.route";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        LoginRoutingModule
    ],
    bootstrap: [LoginComponent]
})

export class loginModule {}