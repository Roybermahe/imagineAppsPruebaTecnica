import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, BehaviorSubject, debounceTime } from "rxjs";
import { environment } from "src/environment/enviroment";
import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private backend = environment.backend;
    private $post = new Subject();
    private $postAll = new Subject();
    private $myPost = new Subject();
    private $message = new BehaviorSubject('');
    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.$post.pipe(
            debounceTime(500)
        ).subscribe({
            next: (resp) => {
                this.http.post(this.backend + '/post', resp).subscribe({
                    next: (req: any) => {
                        if(req.hasOwnProperty('id')){
                            Swal.fire("Good job!", "Post created!", "success");
                        }else {
                            this.$message.next('Ocurrio un error intentando realizar la petición.');
                            Swal.fire("Uppss", "try later!", "error");
                        }
                    },
                    error: (err) => {
                        Swal.fire("Uppss", "try later!", "error");
                    }
                })
            }
        })
    }
    
    get messages() {
        return this.$message.asObservable();
    }
    set post(data: any) {
        this.$post.next(data);
    }

}