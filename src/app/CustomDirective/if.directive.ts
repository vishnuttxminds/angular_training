import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
 @Input() set appIf(value: boolean) {
    this._renderTemplate(value)
  }

constructor(
    private templateRef: TemplateRef<unknown>,
    private vcr: ViewContainerRef
  ) {}

private _renderTemplate(show: boolean) {
    this.vcr.clear();
    if (show) {
      this.vcr.createEmbeddedView(this.templateRef);
    }
  }
}
