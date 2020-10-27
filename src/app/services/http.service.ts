import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HTTPService implements OnInit{
  constructor( private http:HttpClient ) { 
  }
  pokes = []
  httpRes;

  get( url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`, num = 20 ){
    const customUrl = `https://pokeapi.co/api/v2/pokemon?limit=${num}&offset=0`
    if(num !== 20){ return this.http.get(customUrl) } 
    return this.http.get(url)
  }
  
  pushArray(array,url){
    this.http.get(url).subscribe((res)=>{
     array.push(res)
    })
  }

  ngOnInit(){
   
   //this.search20()
  }
}
