import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {
    AbstractControl, NG_VALIDATORS, NgModel, ValidationErrors, Validator, ValidatorFn,
    Validators
} from '@angular/forms';

@Directive({
    selector: '[appFieldMatches]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: FieldMatchesValidatorDirective,
        multi: true
    }]
})
export class FieldMatchesValidatorDirective implements Validator, OnChanges {
    @Input() appFieldMatches: NgModel;

    private validationFunction = Validators.nullValidator;

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['appFieldMatches'];
        if (change) {
            const otherFieldModel = change.currentValue;
            this.validationFunction = fieldMatchesValidator(otherFieldModel);
        } else {
            this.validationFunction = Validators.nullValidator;
        }
    }

    validate(control: AbstractControl): ValidationErrors | any {
        return this.validationFunction(control);
    }
}

export function fieldMatchesValidator(otherFieldModel: NgModel): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
        const valueMustMatch = control.value;
        const valueToMatch = otherFieldModel.value;
        const match = valueMustMatch === valueToMatch;
        return match ? null : {'fieldMatches': {match: false}};
    };
}
