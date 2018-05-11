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
  eventword: string;
  newTask: any;
  selectedTask: any;
  constructor(private _httpService: HttpService) {
  }
  // ngOnInit is like document ready
  ngOnInit(){
    // this.getTasksFromService()
    this.eventword = ""
    this.newTask = {title: "", description: ""}
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our TASKS", data)
      this.tasks = data['tasks'];
      console.log(this.tasks);
    })
  }
  getTaskFromService(id: string){
    console.log(id);
    let observable = this._httpService.getTask(id);
    observable.subscribe(data =>{
      console.log("Got TASK", data);
      this.task = data["task"];
    })
  }
  taskToShow(task){
    this.selectedTask = task;
  }
  getTaskFromKeydown(event: any){
    // console.log(event)
    // console.log(`EVENT, ${event.key}`);
    //regex below searches for letters only and whitespaces:
    var letters = /^[A-Za-z-\s]+$/;
    var eventkey = event.key;
    if(eventkey.match(letters) && eventkey.length < 2){
      this.eventword += event.key;
    }
    // console.log(event.code)
    //conditional below is to delete last letter in string eventword with slice method
    if(event.code == "Backspace"){
      this.eventword = this.eventword.slice(0,this.eventword.length-1);
    }
    // console.log(this.eventword);
    for(var x = 0; x<this.tasks.length; x++){
      if(this.eventword == this.tasks[x]['title']){
        this.selectedTask = this.tasks[x];
        console.log(this.selectedTask);
        break;
      }
    }
  }
}
