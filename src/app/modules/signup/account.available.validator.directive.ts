import {Directive, ElementRef, HostListener} from '@angular/core';
import {
    AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, NG_ASYNC_VALIDATORS, NG_VALIDATORS,
    ValidationErrors
} from '@angular/forms';
import {SignupService} from './signup.service';
import {Observable} from 'rxjs/Observable';



export function checkAccountExists(signupService: SignupService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        const debounceTime = 500; // milliseconds
        return Observable.timer(debounceTime).switchMap(() => {
            return signupService.accountExists(control.value).map(
                bool => {
                    return bool ? {'accountExists': true} : null;
                }
            );
        });
    };
}

@Directive({
    selector: '[appAccountAvailable]',
    providers: [
        {provide: NG_ASYNC_VALIDATORS, useExisting: AccountAvailableValidatorDirective, multi: true}]
})
export class AccountAvailableValidatorDirective implements AsyncValidator {

    constructor(private el: ElementRef, private signUpService: SignupService) {

    }

    validate(c: FormControl): Promise<ValidationErrors | any> | Observable<ValidationErrors | any> {
        return checkAccountExists(this.signUpService)(c);
    }

    registerOnValidatorChange?(fn: () => void): void {
        return null;
    }

    @HostListener('mouseover')
    onMouseOver() {
        const part = this.el.nativeElement.querySelector('.card-text');
        // this.renderer.setStyle(part, 'display', 'block');
    }

    @HostListener('mouseout')
    onMouseOut() {
        const part = this.el.nativeElement.querySelector('.card-text');
        // this.renderer.setStyle(part, 'display', 'none');
    }


}

