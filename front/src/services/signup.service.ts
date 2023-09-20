import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject, debounceTime } from "rxjs";
import { environment } from '../environment/enviroment';
@Injectable({
    providedIn: 'root'
})
export class SignUpService {
    private backend = environment.backend;
    private $signup = new Subject();
    private $message = new BehaviorSubject('');
  
    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.$signup.pipe(
            debounceTime(500)
        ).subscribe({
            next: (resp) => {
                this.http.post(this.backend + '/usuarios', resp).subscribe({
                    next: (req) => {
                        if(req.hasOwnProperty('id')){
                            this.router.navigateByUrl('/login');
                        }else {
                            this.$message.next('Ocurrio un error intentando realizar la petición.')
                        }
                    },
                    error: (err) => {
                    }
                })
            }
        })
    }
    
    get messages() {
        return this.$message.asObservable();
    }
    set signup(data: any) {
        this.$signup.next(data);
    }

}