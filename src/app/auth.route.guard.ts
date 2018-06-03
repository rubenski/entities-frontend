import {CanActivate, GuardsCheckEnd, NavigationStart, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Injectable} from '@angular/core';
import {AuthService} from './modules/shared/auth.service';

@Injectable()
export class AuthRouteGuard implements CanActivate {

    constructor(private cookieService: CookieService, private router: Router, private loginService: AuthService) {
        // Listen to router events
        this.router.events.subscribe((e) => {
            // see also
            if (e instanceof GuardsCheckEnd) {
                if (!e.shouldActivate) {
                    console.log('AuthRouteGuard says nooo');
                    this.loginService.setRedirectUrl(e.url);
                    this.router.navigate(['/login']);
                }
            }
        });
    }

    canActivate() {
        return this.loginService.isLoggedIn();
    }
}
