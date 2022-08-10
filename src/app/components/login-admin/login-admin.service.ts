import { ElementRef, Renderer2, Injectable } from '@angular/core';

@Injectable()
export class LoginAdminService {

  toggleHasValueClass(value: string, renderer: Renderer2, input: ElementRef) {
    if (value !== null && value.length > 0 && input !== null) {
      renderer.addClass(input.nativeElement, 'has-val');
    } else {
      renderer.removeClass(input.nativeElement, 'has-val');
    }
  }
}
