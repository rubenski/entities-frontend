import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../../app.constants';
import {AccountExists} from './account.exists';
import {SignUpForm} from './signup.form';

@Injectable()
export class SignupService {

    private static HTTP_DEFAULT_OPTIONS = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD),
            'withCredentials': 'true'
        })
    };

    private static FORM_SUBMIT_URL = '/api/account/signup';
    private static EMAIL_EXISTS_URL = '/api/account/exists/';


    constructor(private http: HttpClient) {
    }

    signUp(signUpForm: SignUpForm) {
        return this.http.put(SignupService.FORM_SUBMIT_URL, signUpForm, SignupService.HTTP_DEFAULT_OPTIONS);
    }

    accountExists(email: string) {
        return this.http.post(SignupService.EMAIL_EXISTS_URL, new AccountExists(email), SignupService.HTTP_DEFAULT_OPTIONS);
    }

}
