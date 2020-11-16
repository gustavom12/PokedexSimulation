import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { HTTPService } from "../../services/http.service";
import {pokemon} from "../../interface/pokemon-interface";
import {map} from "rxjs/operators"
import {of} from "rxjs"
@Component({
  selector: 'app-poke-id',
  templateUrl: './poke-id.component.html',
  styleUrls: ['./poke-id.component.sass']
})
export class PokeIdComponent implements OnInit {
  id;
  poke:pokemon;
  url;
  next:pokemon;
  nextPokemonUrl;
  nextId;
  prevId;
  prev:pokemon;
  prevPokemonUrl;
  height;
  constructor(private router:Router, private route: ActivatedRoute,
    private serv:HTTPService) { 
    
    this.id = this.route.snapshot.paramMap.get("id")
    this.url = `https://pokeapi.co/api/v2/pokemon/${this.id}`
    this.prevId = this.id -= 1
    this.prevPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${this.prevId}`
    this.nextId = this.id +=2
    this.nextPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${this.nextId}`
    
  }

  navigate(url){
    this.router.navigate(["/pokeid/",url])
    setTimeout(() => {
      window.location.reload()
    }, 500);
    
  }

  ngOnInit(): void {
    //const q = this.router.getCurrentNavigation()
    this.serv.get(this.url).subscribe((res:any)=>{
      this.poke = res
      console.log(res)
      //modify height and weight
      const hsplited = this.poke.height.toString().split(""),
       spliced = hsplited.splice(hsplited.length - 1,0,",")
       if(hsplited.length === 2){hsplited.splice(0,0,"0")}
      this.poke.height = hsplited.join("")
      const wsplited = this.poke.weight.toString().split(""),
       wspliced = wsplited.splice(wsplited.length - 1, 0,",")
       this.poke.weight = wsplited.join("")
    })
    this.serv.get(this.prevPokemonUrl).subscribe((res:any)=> this.prev = res)
    this.serv.get(this.nextPokemonUrl).subscribe((res:any)=> this.next = res)
  
  }
}
