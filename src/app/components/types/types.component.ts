import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {pokemon} from "../../interface/pokemon-interface";
import { HTTPService } from "../../services/http.service";

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.sass']
})
export class TypesComponent implements OnInit {

  constructor(private serv: HTTPService, private router: Router) { }
  pokemons:pokemon[] = []
  PokesNameUrlOnly;
  url = "https://pokeapi.co/api/v2/type/";
  delay = true
  allPokemonsLoaded = false
  type;
  ngOnInit(): void {
    this.type = this.router.url.slice(7)
    this.url = `https://pokeapi.co/api/v2/type/${this.type}`
    this.serv.get(this.url)
      .subscribe((res:any)=>{
        this.PokesNameUrlOnly = res.pokemon.splice(0,20)
        this.PokesNameUrlOnly.forEach(el =>this.serv.pushArray(this.pokemons,el.pokemon.url));
        setTimeout(()=>{this.delay = false},1000)
      })
      const infinitescroll=(entry)=>{
        if(!entry[0].isIntersecting|| this.delay)return;
        this.serv.get(this.url).subscribe((res:any)=>{
          this.PokesNameUrlOnly = res.pokemon.splice(this.pokemons.length,this.pokemons.length + 20)
          this.PokesNameUrlOnly.forEach(el =>{
            if(el.pokemon.name.includes("-")){ 
              this.allPokemonsLoaded = true;
              return
            }
            this.serv.pushArray(this.pokemons,el.pokemon.url)
          });
          this.delay = true
          setTimeout(()=>{this.delay = false},700)
        })
      }
      let observer = new IntersectionObserver(infinitescroll,{threshold: 0.6});
    setTimeout(()=>{observer.observe(document.querySelector(".observer"));},500) 
  }

}
