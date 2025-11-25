import {
  Directive,
  ElementRef,
  Host,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlights]',
})
export class HighlightsDirective {
  constructor(private element: ElementRef, private rendere2: Renderer2) {}

  @HostListener('mouseenter') OnMouseEnter() {
    this.rendere2.addClass(this.element.nativeElement, 'highlight-border');
  }

  @HostListener('mouseout') OnMouseOut() {
    this.rendere2.removeClass(this.element.nativeElement, 'highlight-border');
  }}
