import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackgound]',
})
export class SetBackgoundDirective implements OnInit {


  constructor(private elementRef: ElementRef, private renderer : Renderer2) {

  }

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = 'lightblue';
    // this.elementRef.nativeElement.style.color = 'blue';

    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor', 'lightblue');
    this.renderer.setStyle(this.elementRef.nativeElement,'color', 'red');
    this.renderer.setAttribute(this.elementRef.nativeElement, 'title', 'This is the title...')
  }
}
