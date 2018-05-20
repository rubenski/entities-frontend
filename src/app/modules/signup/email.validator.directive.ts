import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive} from '@angular/core';


@Directive({
    selector: '[appEmailValid]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator {


    static isValidEmailFormat(email: string): boolean {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    static validateCompanyEmail(control: FormControl): ValidationErrors {
        if (!EmailValidatorDirective.isValidEmailFormat(control.value)) {
            return {wrongFormat: 'Email ongeldig'};
        }
        return null;
    }

    validate(c: FormControl): { [key: string]: any; } {
        return EmailValidatorDirective.validateCompanyEmail(c);
    }

}
