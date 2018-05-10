import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
  }

  getTasks(){
    // our http response is observable, strore it in variable
    return this._http.get('/tasks');
    // subscribe to our observable and provide the code we would like to do with our data from the
    // tempObservable.subscribe(data => {
    //   console.log("Got our tasks!", data)
    // });
  }
  getTask(id:string){
    console.log(id);
    console.log(typeof(id));
    return this._http.get('/tasks/' + id);
  }
}
