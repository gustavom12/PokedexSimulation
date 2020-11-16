import { Component, OnInit,Input } from '@angular/core';
import { HTTPService } from "../../../services/http.service"

//POKE REST API does not has any way to get all evolutions/involutions


@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.sass']
})


export class EvolutionsComponent implements OnInit {
@Input("evolutionUrl")url: string;


  constructor(private serv:HTTPService) { }

  ngOnInit(): void {
     this.serv.get(this.url)
     .subscribe(res=>{
     })
  }

}
