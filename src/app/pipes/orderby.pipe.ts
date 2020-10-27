import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
  pure: false
})
export class OrderbyPipe implements PipeTransform {

  transform(value: any): unknown {
    if(!value)return[]
    
    if(value.length > 19){
      return value.sort(function (a, b){
      return (a.id - b.id)
      })
    //return value.id.sort((a, b) => a - b)
  }
}  

}
