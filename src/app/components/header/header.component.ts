import {HostListener, Component, OnInit, AfterViewInit } from '@angular/core';
import {HTTPService} from "../../services/http.service";
import {Router} from "@angular/router"



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, AfterViewInit {
@HostListener("document:keydown",["$event"])Keydown(e){
  if(e.key === "Enter"){
    this.goToSearchPage()
  }
}
  constructor( private serv:HTTPService, private router: Router ) { 
  }
  httpResponse:any;
  pokemons = [];

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    const $search = document.getElementById("search")
    
  }
  goToSearchPage(){
    const $search:any = document.getElementById("search"),
     search = $search.value
    this.router.navigate(["/search",search])
    setTimeout(() => {location.reload()}, 500); 
  }
}
