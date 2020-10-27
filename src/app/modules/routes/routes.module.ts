import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router"
import { HomeComponent } from '../../components/home/home.component';
import { PokeIdComponent } from '../../components/poke-id/poke-id.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"pokeid/:id",
    component: PokeIdComponent
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
