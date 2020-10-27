import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { HTTPService } from "../../services/http.service";
import {pokemon} from "../../interface/pokemon-interface"
@Component({
  selector: 'app-poke-id',
  templateUrl: './poke-id.component.html',
  styleUrls: ['./poke-id.component.sass']
})
export class PokeIdComponent implements OnInit {
  id;
  poke:pokemon;
  url;
  constructor(private router:Router, private route: ActivatedRoute,
    private serv:HTTPService) { 
    this.id = this.route.snapshot.paramMap.get("id")
    this.url = `https://pokeapi.co/api/v2/pokemon/${this.id}`
  }

  ngOnInit(): void {
    const q = this.router.getCurrentNavigation()
    console.log(this.router.getCurrentNavigation())
    console.log(this.id)
    this.serv.get(this.url).subscribe((res:any)=>{
      console.log(res)
      this.poke = res
    console.log(this.poke)
    })
  }

}
