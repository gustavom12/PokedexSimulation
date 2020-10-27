import { Component, OnInit } from '@angular/core';
import {HTTPService} from "../../services/http.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})


export class HomeComponent implements OnInit {


  constructor( private serv:HTTPService) { }

  httpResponse:any;
  pokemons = [];


  ngOnInit(): void {
    const url =  "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    //Get 20 pokemons (name and url only)
    this.serv.get().subscribe((res:any)=>{
       this.httpResponse = res
       res.results.forEach((el)=>{
          this.serv.pushArray(this.pokemons, el.url)
          console.log(el.front_default)
        })
        console.log(this.pokemons)
    }
    ,(err)=>{
      console.log(err)
    })
let delay = false
setTimeout(() => {
  delay = true
}, 1000);
//INFINITE SCROLL
    const cb=()=>{
      //This is a delay to this function because if it has not delay, the function is called many times
      if(!delay) return
      if(delay){
        console.log("asdasd",this.httpResponse)
        this.serv.get(this.httpResponse.next).subscribe((res:any)=>{
          this.httpResponse = res
          res.results.forEach(el => {
            this.serv.pushArray(this.pokemons, el.url)
            console.log(el.front_default)
          });
        })
        delay = false
        setTimeout(() => {
          delay = true
        }, 500);
      }

    }
    const observerOptions = {
      threshold: 0.8
    }

    let observer = new IntersectionObserver(cb,observerOptions);
  
    observer.observe(document.querySelector(".observer"));
 }
}
