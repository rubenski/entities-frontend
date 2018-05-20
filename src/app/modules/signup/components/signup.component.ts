import {Component, OnInit} from '@angular/core';
import {Company} from '../company';
import {Account} from '../account';

@Component({
    moduleId: module.id,
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    public countries = [{code: 'NLD', name: 'Netherlands'}];
    public company: Company = Company.prefilled();
    public account: Account = new Account();
    public step = 1; // start at step 1

    // Triggers validation  on the password confirmation field when the user changes the 'first' password
    passwordChanged(form) {
        form.controls.confirmPassword.updateValueAndValidity({ onlySelf: false, emitEvent: true });
    }

    ngOnInit(): void {
    }

    get diagnostic() {
        return JSON.stringify(this.company);
    }

    goToStep(step): void {
       this.step = step;
    }
}
