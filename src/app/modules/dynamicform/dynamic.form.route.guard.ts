import {CanActivate} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Injectable} from '@angular/core';

@Injectable()
export class DynamicFormRouteGuard implements CanActivate {

    constructor(private cookieService: CookieService) {
    }


    canActivate() {
        const authenticated = this.cookieService.get('authenticated');
        return authenticated === '1';
    }
}
