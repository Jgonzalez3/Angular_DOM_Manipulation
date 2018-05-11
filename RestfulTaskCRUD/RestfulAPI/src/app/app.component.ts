import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RestfulTask CRUD';
  tasks: string[];
  task: any;
  newtask: any;
  show: boolean;
  constructor(private _httpService: HttpService) {
    this._httpService.getTasks();
  }
  ngOnInit(){
    this.newtask = {title: "", description: ""}
    this.getTasksFromService();
    this.task;
    this.show = false;
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our Tasks:", data);
      this.tasks = data['tasks'];
      console.log(this.tasks);
      console.log(this.task);
    })
  }
  CreateTask(){
    // add code to send task data to backend
    let observable = this._httpService.addTask(this.newtask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newtask = {title: "", description: ""};
      this.getTasksFromService();
    })
  }
  UpdateTask(id){
    let observable = this._httpService.editTask(id, this.task);
    observable.subscribe(data =>{
      console.log("Got data", data);
      this.task = undefined;
      this.getTasksFromService();
    })
  }
  DeleteTask(id){
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data=>{
      console.log("Got DATA",data);
      this.getTasksFromService();
    })
  }
  getTaskFromService(id){
    let observable = this._httpService.getTask(id);
    observable.subscribe(data=>{
      console.log("GOT DATA", data);
      this.task = data['task'];
      console.log(this.task);
    })
  }
}
