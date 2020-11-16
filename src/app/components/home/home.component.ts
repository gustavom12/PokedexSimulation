import { Component, OnInit } from '@angular/core';
import { map  } from 'rxjs/operators';
import {HTTPService} from "../../services/http.service"
import {pokemon} from "../../interface/pokemon-interface"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  constructor( private serv:HTTPService) { }
  highestUrl =  "https://pokeapi.co/api/v2/pokemon?limit=20&offset=873"
  lowestUrl =  "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  httpResponse:any;
  pokemons =  []
  delay;
  everypokemonurl=[]
  orderby = "lowest";
  

 get(url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"){ 
  let newpokemons:pokemon[] = []
   //Get 20 pokemons (name and url only)
   this.serv.get(url).subscribe((res:any)=>{
    this.httpResponse = res
    //Gets every pokemon details (20 pokemons)
      res.results.forEach((el)=>this.serv.pushArray(newpokemons, el.url))
    //this function order new pokemons and put them in "pokemons" array
    this.ordenar(newpokemons,this.orderby)
    newpokemons = []
  }
  ,(err)=> console.log(err))
  //Set delay to infinite scroll
  this.delay = false
  setTimeout(()=>{this.delay = true}, 1500);
 }
//order arrays
 ordenar(array:any[],order ="lowest"){
  if(array.length <= 19){setTimeout(() => {this.ordenar(array,order)}, 100);return}
  array.sort(function(a:any,b:any){
    if( order=== "lowest"){ return a.id - b.id}
    if( order === "highest"){return b.id - a.id}
    if(order === "a-z"){
      if(a.name < b.name)return -1;
      if(a.name > b.name)return 1;
      return 0;
    }
    if(order === "z-a"){
      if(a.name < b.name)return 1;
      if(a.name > b.name)return -1;
      return 0;
    }
  })
  if(this.pokemons.length === 0){this.pokemons = array; return}
  this.pokemons = this.pokemons.concat(array)
 }

 getorderalphabetic(){
   let newpokemons:pokemon[] = [];
   //gets every pokemon name and url, if it is already defined, is not necesary
  if(this.everypokemonurl.length === 0){
    this.serv.get("https://pokeapi.co/api/v2/pokemon?limit=893&offset=0")
  .subscribe((data:any)=>{
    this.everypokemonurl = data.results
    if(this.orderby === "a-z"){
        this.everypokemonurl.sort((a,b)=>{
          if(a.name < b.name)return -1;
          if(a.name > b.name)return 1;
          return 0;
        })
      }
    if(this.orderby === "z-a"){
      this.everypokemonurl.sort((a,b)=>{
        if(a.name < b.name)return 1;
        if(a.name > b.name)return -1;
        return 0;
      })
    
      }
    })
  }
    const retry = ()=>{ 
      if(this.everypokemonurl.length === 0){ setTimeout(() => {retry();return;}, 300);} 
      const sliced:any = this.everypokemonurl.slice(this.pokemons.length,this.pokemons.length + 20)
      sliced.forEach(el => {
        this.serv.pushArray(newpokemons,el.url)
      });
      this.ordenar(newpokemons,this.orderby)
    }
  retry()
  this.delay = false
  setTimeout(()=>{this.delay = true}, 1000);
  }

 order(string, url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"){
   /*string defines "ordertby" that is a global variable, in get function, this variable defines
   next or previus url */
   this.orderby = string
   //reset pokemons to not mix pokemons
   this.pokemons = []
   this.delay = false
   if(string === "a-z"||string === "z-a"){
    this.everypokemonurl = [];
    this.getorderalphabetic(); return }
   this.get(url) 
 }

 random(first){
   if(first)this.pokemons = []
   //Gets 20 random pokemons
   this.orderby = "random"
  for (let i = 0; i <= 19; i++) {
    const randomNumber = Math.round(Math.random() * (893) )
    this.serv.pushArray(this.pokemons,`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
    this.delay = false
    setTimeout(()=>{this.delay = true}, 1000);
  }
   
 }

 ngOnInit(): void {
  this.get()
  const infinitescroll=()=>{
    //gets 20 more pokemons when ".observer" is on the view
    /*This is a delay to this function because if it has not delay,
     the function is called many times*/
    if(!this.delay){return}
    if(this.orderby === "lowest")this.get(this.httpResponse.next);
    if(this.orderby === "highest")this.get(this.httpResponse.previous);
    if(this.orderby === "a-z" ||this.orderby === "z-a")this.getorderalphabetic();
    if(this.orderby === "random")this.random(false);
  }
  const observerOptions = {threshold: 0.6}
  let observer = new IntersectionObserver(infinitescroll,observerOptions);
  observer.observe(document.querySelector(".observer"));
}
}
