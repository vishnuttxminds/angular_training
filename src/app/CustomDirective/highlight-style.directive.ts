import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightStyle]',
})
export class HighlightStyleDirective implements OnChanges {
  @Input() appHighlightStyles: boolean = false;
  @Input() comStyle :string = "";

  constructor() {}

  @HostBinding('style.border')
  border: string = '';

  ngOnChanges() {
    this.border = this.appHighlightStyles ? this.comStyle : '';
  }
}
