import { Directive, Input,ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[PokemonType]'
})
export class PokemonTypeDirective implements AfterViewInit{
  @Input("PokemonType")text: String
//Set color to pokemon types
  constructor(public el:ElementRef) { }
  $el:HTMLElement = this.el.nativeElement
  ngAfterViewInit(){
    const text = this.$el.textContent
    //console.log(text)
    if(text === "Poison"){ 
      this.$el.style.background = "#b97fc9"
    }
    if(text === "Grass"){
      this.$el.style.background = "#9bcc50"
    }
    if(text === "Fire"){
      this.$el.style.background = "#fd7d24"
    }
    if(text === "Flying"){
      this.$el.classList.add("Flyingtype")
    }
    if(text === "Water"){
      this.$el.style.background = "#4592c4"
    }
    if(text === "Bug"){
      this.$el.style.background = "#729f3f"
    }
    if(text === "Normal"){
      this.$el.style.background = "#a4acaf"
      this.$el.style.color = "#000000"
    }
    if(text === "Electric"){
      this.$el.style.background = "#eed535"
      this.$el.style.color = "#000000"
    }
    if(text === "Ground"){
      this.$el.style.background = "#ab9842"
    }
    if(text === "Fairy"){
      this.$el.style.background = "#fdb9e9"
      this.$el.style.color = "#000000"
    }
    if(text === "Fighting"){
      this.$el.style.background = "#d56723"
      this.$el.style.color = "#000000"
    }
    if(text === "Psychic"){
      this.$el.style.background = "#f366b9"
    }
    if(text === "Rock"){
      this.$el.style.background = "#a38c21"
    }
    if(text === "Steel"){
      this.$el.style.background = "#9eb7b8"
      this.$el.style.color = "#000000"
    }
    if(text === "Ice"){
      this.$el.style.background = "#51c4e7"
      this.$el.style.color = "#000000"
    }
    if(text === "Ghost"){
      this.$el.style.background = "#7b62a3"
    }
    if(text === "Dragon"){
      this.$el.classList.add("DragonType")
    }
    if(text === "Dark"){
      this.$el.style.background = "#707070"
    }

  }
}
