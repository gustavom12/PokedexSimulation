import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HTTPService} from "../../services/http.service";
import { pokemon } from "../../interface/pokemon-interface"
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  getError: boolean;
  constructor(private router:Router, public httpS: HTTPService) { }
  pokemons:pokemon[] = []
  ngOnInit(): void {
    
    const search = this.router.url.slice(8)
    this.httpS.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .subscribe((data:any)=>{
        if(search === ""){ this.getError = true}
          else{this.pokemons.push(data)}
       }
       ,(err)=>{
        console.log(err)
        this.getError = true
       }
       )
    }

}
