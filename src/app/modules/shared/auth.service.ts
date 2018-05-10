import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../../app.constants';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthService {

    private static HTTP_DEFAULT_OPTIONS = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD),
            'withCredentials': 'true'
        })
    };
    private static URL_AUTH_TOKEN = '/iam/oauth/token';
    private static URL_LOGOUT = '/iam/logout';
    private redirUrl: string;


    constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {
    }

    redirectUrl(url: string) {
        this.redirUrl = url;
    }

    login(username: string, password: string) {

        console.log('log in!');

        const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;


        this.http.post(AuthService.URL_AUTH_TOKEN, body, AuthService.HTTP_DEFAULT_OPTIONS).subscribe(res => {
                console.log(res);
                if (this.redirUrl) {
                    this.router.navigate([this.redirUrl]);
                    // Clear redirect url after redirecting
                    this.redirUrl = null;
                } else {
                    this.router.navigate(['/']);
                }
            },
            error => {
                console.log('error');
            });
    }

    refreshAccessToken(): Observable<{}> {

        console.log('refreshing!');
        const params = new HttpParams();
        const body = params.set('grant_type', 'refresh_token').set('bla', 'bla');
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD),
                'withCredentials': 'true'
            })
        };

        return this.http.post(AuthService.URL_AUTH_TOKEN, body, options);
    }

    isLoggedIn(): boolean {
        return this.cookieService.get('authenticated') === '1';
    }

    logout() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD),
                'withCredentials': 'true'
            })
        };

        this.http.get(AuthService.URL_LOGOUT, httpOptions).subscribe(res => {
                console.log(res);
            },
            error => {
                console.log('error during logout');
            });
    }

}
