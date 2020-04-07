import { Directive,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  constructor(render:Renderer2,el:ElementRef) {
    
  render.setStyle(el.nativeElement,'backgroundColor','gray'); }

}
