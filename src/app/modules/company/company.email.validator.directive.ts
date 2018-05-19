import {Directive, ElementRef, HostListener} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
    selector: '[appCompanyEmail]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: CompanyEmailValidatorDirective, multi: true}]
})
export class CompanyEmailValidatorDirective implements Validator {

    constructor(private el: ElementRef) {
        // el.nativeElement.style.backgroundColor = 'black';
    }

    static validateCompanyEmail(control: FormControl): ValidationErrors {

        if (!CompanyEmailValidatorDirective.isValidEmailFormat(control.value)) {
            return { companyEmail: 'Email ongeldig'};
        } else {
           // Implement service call here.... we want to know whether the email already exists
        }

        return null;
    }

    static isValidEmailFormat(email: string): boolean {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }


    validate(control: FormControl): { [key: string]: any; } {
        return CompanyEmailValidatorDirective.validateCompanyEmail(control);
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

