import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from 'src/services/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private signInService: SignInService
  ){
    this.form = this.fb.group({
      username: ['',[Validators.email, Validators.required]],
      password: ['',[Validators.minLength(8), Validators.required]]
    })
  }


  sendSignIn() {
    this.signInService.signin = this.form.value
  }
}
