import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableButton]',
})
export class DisableButtonDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    console.log('Button clickded');

    this.renderer.setAttribute(this.element.nativeElement, 'disabled', 'true');
  }
}
