import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import jwtDecode from "jwt-decode";
import { BehaviorSubject, Subject, debounceTime } from "rxjs";
import { environment } from "src/environment/enviroment";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
})
export class SignInService {
    private backend = environment.backend;
    private $signin = new Subject();
    private $message = new BehaviorSubject('');
    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.$signin.pipe(
            debounceTime(500)
        ).subscribe({
            next: (resp) => {
                this.http.post(this.backend + '/auth/login', resp).subscribe({
                    next: (req: any) => {
                        if(req.hasOwnProperty('token')){
                            this.router.navigateByUrl('/home/all-post');
                            sessionStorage.setItem('TOKEN', req?.token)
                        }else {
                            this.$message.next('Ocurrio un error intentando realizar la petición.');
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
    set signin(data: any) {
        this.$signin.next(data);
    }

    get userSign() {
        const token = sessionStorage.getItem('TOKEN');
        if(token) {
            return jwtDecode(token) || undefined
        }
        return undefined
    }
}