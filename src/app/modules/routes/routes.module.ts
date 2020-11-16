import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router"
import { HomeComponent } from '../../components/home/home.component';
import { PokeIdComponent } from '../../components/poke-id/poke-id.component';
import {SearchComponent} from "../../components/search/search.component";
import {TypesComponent} from "../../components/types/types.component"

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"pokeid/:id",
    component: PokeIdComponent
  },
  {
    path:"search/:idname",
    component: SearchComponent
  },
  {
    path:"types/:idname",
    component: TypesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RouteModule { }
