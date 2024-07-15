import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appFormError]',
  // providers: [{ 
  //   provide: NG_VALIDATORS, 
  //   useExisting: FormErrorDirective, 
  //   multi: true 
  // }]
})
export class FormErrorDirective {
  // @Input('appFormError') customDirective: any;
  // validate(control: AbstractControl): ValidationErrors | null {
  //   if (!control.value || !this.containsExample) {
  //     return null; // If no value or substring specified, do not validate
  //   }


  ngAfterViewInit(){
    console.log('runnnnnnnn')
    const formControlName = this.elementRef.nativeElement.getAttribute('formcontrolname') as HTMLInputElement
    const inputEl = this.elementRef.nativeElement.querySelector('input')
    inputEl.setAttribute('formcontrolname', formControlName)
  }

  // validate(control: AbstractControl): ValidationErrors|null {
  //   console.log(control, 'controlcontrol')
  //   return {'custom': true};
  //   }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }


}
