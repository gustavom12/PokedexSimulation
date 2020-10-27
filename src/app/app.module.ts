import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { AppComponent } from './components/MainComponent/app.component';
import { HomeComponent } from './components/home/home.component';
import { PokeIdComponent } from './components/poke-id/poke-id.component';
import {RouteModule} from "./modules/routes/routes.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { MiniChangeIdPipe } from './pipes/mini-change-id.pipe';
import { PokemonTypeDirective } from './directives/pokemon-type.directive';
import { PoketypeDirective } from './directives/poketype.directive'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokeIdComponent,
    HeaderComponent,
    FooterComponent,
    OrderbyPipe,
    MiniChangeIdPipe,
    PokemonTypeDirective,
    PoketypeDirective
  ],
  imports: [
    BrowserModule,
    RouteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
