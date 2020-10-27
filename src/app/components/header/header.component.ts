import { Component, OnInit } from '@angular/core';
import {HTTPService} from "../../services/http.service"
//import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor( private serv:HTTPService ) { 

  }

  //pokemonsNameUrl = []
  httpResponse:any;
  pokemons = [];


  ngOnInit(): void {
    // const url =  "https://pokeapi.co/api/v2/pokemon?limit=20&offset=200"
    // //Get 20 pokemons (name and url only)
    // this.serv.get().subscribe((res:any)=>{
    //    this.httpResponse = res
    //    res.results.forEach((el)=>{
    //       this.serv.pushArray(this.pokemons, el.url)
    //     })
    //     console.log(this.pokemons)
    // }
    // ,(err)=>{
    //   console.log(err)
    // })
  }
}
