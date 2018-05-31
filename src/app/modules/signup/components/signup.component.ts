import {Component, OnInit} from '@angular/core';
import {Company} from '../company';
import {Account} from '../account';
import {SignupService} from '../signup.service';
import {SignUpForm} from '../signup.form';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

    public countries = [{code: 'NLD', name: 'Netherlands'}];
    public company: Company = Company.prefilled();
    public account: Account = Account.prefilled();
    public step = 1; // start at step 1


    constructor(private signUpService: SignupService, private router: Router) {
    }

    // Triggers validation  on the password confirmation field when the user changes the 'first' password
    passwordChanged(form) {
        form.controls.confirmPassword.updateValueAndValidity({onlySelf: false, emitEvent: true});
    }

    goToStep(step): void {
        this.step = step;
    }

    submitForm() {
        this.signUpService.signUp(new SignUpForm(this.account, this.company)).subscribe(res => {
            console.log('account created...');
            this.router.navigate(['signup/confirmation']);
        }, err => {
            console.log('ERROR: ' + err);
        });
    }
}
