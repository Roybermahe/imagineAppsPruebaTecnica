import { HttpClient, HttpParams } from "@angular/common/http";
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
    private $mypostlist = new BehaviorSubject([] as any[])
    private $allpostlist = new BehaviorSubject([] as any[])
   
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
                            this.mypostGet = { id: req?.usuario?.id, date: '' }
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
        this.$myPost.pipe(
            debounceTime(500)
        ).subscribe((resp: any) => {
            const params = new HttpParams({
                fromObject: {
                    date: resp.date
                }
            })
            this.http.get(this.backend + '/post/user/'+resp.id, { params }).subscribe((req: any) => {
                this.$mypostlist.next(req as any[])
            })
        })
        this.$postAll.pipe(
            debounceTime(500)
        ).subscribe((resp: any) => {
            const params = new HttpParams({
                fromObject: {
                    title: resp.title,
                    date: resp.date
                }
            })
            this.http.get(this.backend + '/post', { params }).subscribe((req: any) => {
                this.$allpostlist.next(req as any[])
            })
        })
    }
    
    set mypostGet(data: { id: any; date: string; }) {
        this.$myPost.next(data);
    }

    set allpost(data) {
        this.$postAll.next(data);
    }

    get mypost() {
        return this.$mypostlist.asObservable();
    }

    
    get allpost() {
        return this.$allpostlist.asObservable();
    }
    get messages() {
        return this.$message.asObservable();
    }
    set post(data: any) {
        this.$post.next(data);
    }

}