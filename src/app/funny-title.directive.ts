import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFunnyTitle]'
})
export class FunnyTitleDirective {

  constructor(
    private el: ElementRef,
    private renderer:Renderer2
  ) {
      this.renderer.addClass(this.el.nativeElement, 'class1')
  }

}
