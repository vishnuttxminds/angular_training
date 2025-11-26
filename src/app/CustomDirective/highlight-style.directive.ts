import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightStyle]',
})
export class HighlightStyleDirective implements OnChanges {
  @Input() appHighlightStyle: boolean = false;

  constructor() {}

  @HostBinding('style.border')
  border: string = '';

  ngOnChanges() {
    this.border = this.appHighlightStyle ? '2px solid red' : '';
  }
}
