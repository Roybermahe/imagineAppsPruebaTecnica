import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { PostService } from 'src/services/post.service';
import { SignInService } from 'src/services/signin.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {

  mypost!: Observable<any[]>;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private signService: SignInService
  ) {
    this.form = this.fb.group({
      id: ['',[Validators.required]],
      date: ['']
    })

    this.form.get('date')?.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(resp => {
      this.postService.mypostGet = this.form.value;
    })
  }
  ngOnInit(): void {
    this.mypost = this.postService.mypost;
    const usuario = this.signService.userSign as any;
    if(usuario) {
      this.form.get('id')?.patchValue(usuario.id);
      this.postService.mypostGet = {id: usuario?.id, date: '' }
    }
  }

  

  
}
