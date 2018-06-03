import {Component} from '@angular/core';
import {Credentials} from './credentials';
import {AuthService} from '../../shared/auth.service';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    private model = new Credentials();
    private submitted = false;


    constructor(private loginService: AuthService, private router: Router) {
    }

    onSubmit() {
        this.submitted = true;
        this.loginService.login(this.model.username, this.model.password).subscribe(res => {
            // Why the f is this never called???
            console.log('login ok');
        }, error => {
            // Why the f is this never called??
            console.log('login NOT ok');
        }, () => {

            if (this.loginService.isLoggedIn()) {
                if (this.loginService.getRedirectUrl()) {
                    this.router.navigate([this.loginService.getRedirectUrl()]);
                    // Clear redirect url after redirecting
                    this.loginService.setRedirectUrl(null);
                } else {
                    this.router.navigate(['/']);
                }
            }
        });
    }
}
