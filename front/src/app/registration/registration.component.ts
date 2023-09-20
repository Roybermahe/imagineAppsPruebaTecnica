import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from 'src/services/signup.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private signupService: SignUpService
  ) {
    this.form = this.fb.group({
      nombre: ['',[Validators.required]],
      email: ['',[Validators.email,Validators.required]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmPass: ['',[Validators.required, Validators.minLength(8)]]
    })

    this.form.get('password')?.valueChanges.subscribe(resp => {
      if(resp !== this.form.get('confirmPass')?.value) {
        this.form.get('confirmPass')?.patchValue('');
      }
    })
    this.form.get('confirmPass')?.valueChanges.subscribe(resp => {
      if(resp !== this.form.get('password')?.value) {
        this.form.get('confirmPass')?.setErrors({ invalidData: true });
      }
    })
  }

  sendSignUp() {
    this.signupService.signup = this.form.value;
  }
}
