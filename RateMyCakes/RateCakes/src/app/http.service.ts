import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getCakes(){
    return this._http.get('/cakes')
  }
  getCake(id:string){
    return this._http.get('cakes/'+id)
  }
  addCake(cake){
    return this._http.post('/cakes', cake)
  }
  commentCake(comment){
    return this._http.post('/cakes/comment', comment)
  }

}
