import {CanActivate, GuardsCheckEnd, NavigationStart, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Injectable, state} from '@angular/core';
import {LoginService} from './modules/login/login.service';

@Injectable()
export class AuthRouteGuard implements CanActivate {

    constructor(private cookieService: CookieService, private router: Router, private loginService: LoginService) {
        // Listen to router events
        this.router.events.subscribe((e) => {
            // see also
            if (e instanceof GuardsCheckEnd) {
                if (!e.shouldActivate) {
                    console.log('AuthRouteGuard says nooo');
                    this.loginService.redirectUrl(e.url);
                    this.router.navigate(['/login']);
                }
            }
        });
    }

    canActivate() {
        const authenticated = this.cookieService.get('authenticated');
        return authenticated === '1';
    }
}
