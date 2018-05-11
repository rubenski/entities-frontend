import {Directive, ElementRef, HostListener} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
    selector: '[appCompanyEmail]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: CompanyEmailValidator, multi: true}]
})
export class CompanyEmailValidator implements Validator {

    constructor(private el: ElementRef) {
        // el.nativeElement.style.backgroundColor = 'black';
    }

    static validateCompanyEmail(control: FormControl): ValidationErrors {

        if (!CompanyEmailValidator.isValidEmailFormat(control.value)) {
            return { companyEmail: 'Company email invalid'};
        } else {
           // Implement service call here.... we want to know whether the email already exists
        }

        return null;
    }

    static isValidEmailFormat(email: string): boolean {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }


    validate(control: FormControl): { [key: string]: any; } {
        return CompanyEmailValidator.validateCompanyEmail(control);
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

