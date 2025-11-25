import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private render2 : Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor : string = 'white'
  @HostBinding('style.border') border: string = 'blue'
  @HostBinding('style.color') textColor: string = 'black'


  @HostListener('mouseenter') OnMouseEnter(){
    this.backgroundColor    = 'gray'
    this.border = 'pink'
    this.textColor = 'blue'
  }

   @HostListener('mouseout') OnMouseOut(){
    this.backgroundColor    = 'white'
    this.border = 'blue'
    this.textColor = 'black'
  }

}
