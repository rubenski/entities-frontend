import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../../app.constants';
import {Company} from './company';
import {AccountExists} from "./account.exists";

@Injectable()
export class SignupService {


    private static HTTP_DEFAULT_OPTIONS = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD),
            'withCredentials': 'true'
        })
    };

    private static FORM_SUBMIT_URL = '/api/user/company';
    private static EMAIL_EXISTS_URL = '/api/user/exists/';


    constructor(private http: HttpClient) {
    }

    saveCompany(company: Company) {
        this.http.put(SignupService.FORM_SUBMIT_URL, company, SignupService.HTTP_DEFAULT_OPTIONS).subscribe(res => {
                console.log('success: ' + res);
            },
            error => {
                console.log('error: ' + error);
            });
    }

    accountExists(email: string) {
        return this.http.post(SignupService.EMAIL_EXISTS_URL, new AccountExists(email), SignupService.HTTP_DEFAULT_OPTIONS);
    }

}
