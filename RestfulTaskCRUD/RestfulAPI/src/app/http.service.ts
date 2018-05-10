import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getTasks(){
    // our http response is observable, strore it in variable
    return this._http.get('/tasks');
  }
  getTask(id:string){
    console.log(id);
    return this._http.get('/tasks/' + id);
  }
  addTask(newtask){
    console.log(newtask)
  return this._http.post('/tasks', newtask);
  }
  editTask(id:string, task){
    console.log(task);
    console.log(id);
    return this._http.put('/tasks/edit/'+ id, task)
  }
  deleteTask(id:string){
    console.log(id)
    return this._http.delete('/tasks/' + id)
  }
}
