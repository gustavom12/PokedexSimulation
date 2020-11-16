import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
  pure: false
})
export class OrderbyPipe implements PipeTransform {

  transform(value: any): unknown {
    if(value.length >= 2){
      return value.sort(function (a, b){
      return (a.id - b.id)
      })
    }else{
      return value
    }
}  

}
