import { Directive, Input,ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appStats]'
})
//This directive makes the stats grafhic
export class StatsDirective implements OnInit{
@Input("appStats")stat:number
//Maxheight of the grafhic (100%)
@Input("maxheight")maxheight:number
//maxstat is the max that the stat can reach, this is useful because
// if stat is 20, and maxstat is 200, this directive make 10% of maxheight 
@Input("maxstat")maxstat:number
  constructor(private el:ElementRef) { }
  $el = this.el.nativeElement
  ngOnInit(){
    const percent = this.stat / this.maxstat * 100
    //Set Height of element
    const heightonepercent = this.maxheight / 100
    const height = heightonepercent * percent 
    this.$el.style.height = `${height}px`
  }
}
