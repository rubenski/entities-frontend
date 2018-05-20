import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../../app.constants';
import {Company} from './company';

@Injectable()
export class CompanyService {

    private static HTTP_DEFAULT_OPTIONS = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD),
            'withCredentials': 'true'
        })
    };

    private static FORM_SUBMIT_URL = '/api/user/company';


    constructor(private http: HttpClient) {
    }

    put(company: Company) {
        this.http.put(CompanyService.FORM_SUBMIT_URL, company, CompanyService.HTTP_DEFAULT_OPTIONS).subscribe(res => {
                console.log('success: ' + res);
            },
            error => {
                console.log('error: ' + error);
            });
    }

}
