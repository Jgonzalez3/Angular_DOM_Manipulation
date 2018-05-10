import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  tasks: string[];
  task: string;
  constructor(private _httpService: HttpService) {
  }
  // ngOnInit is like document ready
  ngOnInit(){
    // this.getTasksFromService()
    this.tasks
    this.task
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our TASKS", data)
      this.tasks = data['tasks'];
      console.log(this.tasks);
    })
  }
  getTaskFromThisTasks(id: string){
    console.log(id);
    for(var x = 0; x<this.tasks.length; x++){
      if(id == this.tasks[x]._id){
        this.task = this.tasks[x];
        console.log(this.task);
      }
    }
  }
}
