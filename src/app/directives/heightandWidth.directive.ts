import { AfterViewInit, Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[HWanimation]'
})
export class HDirective implements AfterViewInit{

  constructor(private el: ElementRef) {}
  $el = this.el.nativeElement;
//Select height or width, depends on what you want to change
  @Input("HWanimation")heightorwidth:string;
  @Input("HWdelay")delay:number = 0
  
  ngAfterViewInit(){
    const pxs = Object.assign({},{px: 0})
    pxs.px = Number(this.$el.style.height.replace("px",""))
    this.$el.style.height = 0
    this.$el.style.height = "0px"
    const options = {threshold: 0.6},
    x = this.heightorwidth,
      cb = (entry) => {
        if (!entry[0].isIntersecting) return;
          let i = 0
          const e = this.$el
          setTimeout(()=> increment(),this.delay)
          function increment(){
             if(i >= pxs.px) return
             i+= 1
             if(x === "height")e.style.height = `${i}px`
             if(x === "width")e.style.width = `${i}`
             setTimeout(()=>increment(),15)  
          }
        obs.disconnect();
      },
    obs = new IntersectionObserver(cb, options);
    obs.observe(this.$el);
  }
}

