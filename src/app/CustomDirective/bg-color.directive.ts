import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
})
export class BgColorDirective implements OnInit {
  allowedColors: string[] = ['yellow', 'green', 'pink', 'purple'];
  @Input('appBgColor') inputColor: string | undefined;

  constructor(private element: ElementRef, private render: Renderer2) {}
  defaultColor: string = 'lightgray';

  ngOnInit(): void {
    let finalColor = this.defaultColor;

    if (!this.inputColor) {
      finalColor = this.defaultColor;
    } else if (
      this.allowedColors.includes(this.inputColor.toLocaleLowerCase())
    ) {
      finalColor = this.inputColor;
    } else {
      finalColor = 'red';
    }

    this.render.setStyle(
      this.element.nativeElement,
      'background-color',
      finalColor
    );
  }
}
