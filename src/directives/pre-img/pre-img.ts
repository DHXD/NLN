import { Directive } from '@angular/core';

/**
 * Generated class for the PreImgDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[pre-img]' // Attribute selector
})
export class PreImgDirective {

  constructor() {
    console.log('Hello PreImgDirective Directive');
  }

}
