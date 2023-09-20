import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RegistrationComponent } from "./registration.component";
import { RegistrationRoutingModule } from "./registration.route";

@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RegistrationRoutingModule
    ],
    bootstrap: [RegistrationComponent]
})

export class RegistrationModule {}