import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miniChangeId'
})
export class MiniChangeIdPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(!value) return value;
    if(value.toString().length === 1){ return "00" + value.toString()}
    if(value.toString().length === 2){ return "0" + value.toString()}
    if(value.toString().length <= 3){ return value}
  
  }

}
