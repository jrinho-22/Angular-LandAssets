import { ControlContainer, FormControl, FormGroupDirective, FormGroupName, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  public form!: ControlContainer

  isErrorState(control: FormControl | null): boolean {
    let submitted: boolean = false
    if (this.form instanceof FormGroupDirective) {
      submitted = this.form.submitted
    }
    if (this.form instanceof FormGroupName) {
      submitted = (this.form.formDirective as FormGroupDirective).submitted
    }
    return !!(control && control.invalid && submitted);
  }
}

//   import { ControlContainer, FormControl, FormGroupDirective, NgForm } from "@angular/forms";
// import { ErrorStateMatcher } from "@angular/material/core";

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   control!: FormControl | null
//   form!: ControlContainer | null
//   constructor(control: FormControl | null, form: ControlContainer) {
//     this.control = control
//     this.form = form
//   }
//   isErrorState(): boolean {
//     console.log(this.form, this.control, 'this.controlthis.controlthis.controlthis.control')
//     // const isSubmitted = this.form && this.form.submitted && this.form.touched;
//     // return !!(this.control && this.control.invalid && (this.control.dirty || this.control.touched || isSubmitted));
//     return true
//   }
// }