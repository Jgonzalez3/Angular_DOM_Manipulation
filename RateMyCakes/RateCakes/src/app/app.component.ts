import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rate My Cakes';
  cakes: string[];
  newcake: any;
  newcomment: any;
  cake: any;
  bakersearch: string;
  selectedCake: any;
  comment: any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newcake = {baker: "", image: ""};
    this.newcomment = {comment: "", rating:1, cakeid: ""}
    this.bakersearch = "";
    this.getCakesFromService();
  }
  getCakesFromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data=>{
      console.log("Got CAkes", data);
      this.cakes = data["cakes"];
      console.log(this.cakes);
    })
  }
  createCake(){
    let observable = this._httpService.addCake(this.newcake);
    observable.subscribe(data=>{
      console.log("Got data from post", data);
        this.newcake = {baker: "", image: ""};
        this.getCakesFromService();
    })
  }
  showCake(cake){
    this.selectedCake = cake;
    var sum = 0;
    for(let x = 0; x<cake.comments.length; x++){
      console.log(cake.comments[x].rating);
      sum += cake.comments[x].rating;
    }
    this.selectedCake['ratingsum'] = sum/cake.comments.length;
    console.log(this.selectedCake);
  }
  // work on comment pushing to cake
  createComment(cakeid, cake){
    this.newcomment.cakeid = cakeid;
    console.log(this.newcomment);
    let observable = this._httpService.commentCake(this.newcomment);
    observable.subscribe(data=>{
      console.log("Got data from post", data);
      this.newcomment = {commment: "", rating: 1}
      this.getCakesFromService();
    })
  }
  getCakeFromKeydown(event: any){
    var letters = /^[A-Za-z-\s]+$/;
    var eventkey = event.key;
    if(eventkey.match(letters) && eventkey.length < 2){
      this.bakersearch += event.key;
    }
    if(event.code == 'Backspace'){
      this.bakersearch = this.bakersearch.slice(0,this.bakersearch.length-1);
    }
    for(var x = 0; x<this.cakes.length; x++){
      if(this.bakersearch == this.cakes[x]['baker']){
        this.selectedCake = this.cakes[x];
        break;
      }
    }
  }

}
