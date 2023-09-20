import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/services/post.service';
import { SignInService } from 'src/services/signin.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  form: FormGroup;
  fecha = new Date();
  usuario: any;
  constructor(
    private fb: FormBuilder,
    private signInService: SignInService,
    private postService: PostService
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      message: ['', [Validators.required, Validators.maxLength(300)]],
      usuario: this.fb.group({
        id: ['',[Validators.required]]
      })
    })
  }
  ngOnInit(): void {
    this.usuario = this.signInService.userSign;
    if (this.usuario) {
      this.form.get('usuario')?.patchValue(this.usuario);
    }
  }

  createPost() {
    this.postService.post = this.form.value;
  }
}
