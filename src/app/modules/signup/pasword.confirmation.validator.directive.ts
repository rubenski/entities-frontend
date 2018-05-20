import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

@Directive({
    selector: '[appPwField]',
    providers: [{provide: NG_VALIDATORS, useExisting: PasswordConfirmationValidatorDirective, multi: true}]
})
export class PasswordConfirmationValidatorDirective implements Validator, OnChanges {

    @Input('appPwField') appPwField: string;

    validate(control: AbstractControl): {[key: string]: any} {

        const parent = control.parent;
        const val = control.value;

        return this.appPwField ? this.pwValidator(new RegExp(this.appPwField, 'i'))(control)
            : null;
    }

    pwValidator(nameRe: RegExp): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            const forbidden = nameRe.test(control.value);
            return forbidden ? {'forbiddenName': {value: control.value}} : null;
        };
    }

    ngOnChanges(changes: SimpleChanges): void {
        return null;
    }

}
