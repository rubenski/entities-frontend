import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

@Directive({
    selector: '[appPwField]',
    providers: [{provide: NG_VALIDATORS, useExisting: PasswordConfirmationValidatorDirective, multi: true}]
})
export class PasswordConfirmationValidatorDirective implements Validator, OnChanges {

    @Input('appPwField') appPwField: string;

    fuck() {
        console.log('wtf');
    }


    validate(control: AbstractControl): {[key: string]: any} {

        const parent = control.parent;
        const val = control.value;

        return this.appPwField ? this.pwValidator(new RegExp(this.appPwField, 'i'))(control)
            : null;
    }

    registerOnValidatorChange(fn: () => void): void { this.fuck = fn; }

    pwValidator(nameRe: RegExp): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            const forbidden = nameRe.test(control.value);
            return forbidden ? {'forbiddenName': {value: control.value}} : null;
        };
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.fuck();
    }

}
