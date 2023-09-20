import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  form: FormGroup
  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nombres: ['',[Validators.required]],
      email: ['',[Validators.email,Validators.required]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmPass: ['',[Validators.required, Validators.minLength(8)]]
    })
  }
}
