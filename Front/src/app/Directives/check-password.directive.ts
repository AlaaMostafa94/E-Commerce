import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';



// function validatePassword(): ValidatorFn {
//   return (control: AbstractControl) => {
//     let isValid = false;
//     if (control && control instanceof FormGroup) {
//       let group = control as FormGroup;
//       if (group.controls['password'] && group.controls['confirmPassword']) {
//         isValid = group.controls['password'].value == group.controls['confirmPassword'].value;
//       }
//     }
//     if (isValid) {
//       return null;
//     } else {
//       return { 'passwordCheck': 'failed' }
//     }
//   }
// }


@Directive({
  selector: '[appCheckPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CheckPasswordDirective, multi: true }]

})
export class CheckPasswordDirective implements Validator {
  constructor() {
   }
   @Input() appCheckPassword:string=''

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
const controlToCpmpare=control.parent?.get(this.appCheckPassword);
if(controlToCpmpare && control.value !== controlToCpmpare.value){
return {'notEqual':true}
}
      return null
  }


  }
 


