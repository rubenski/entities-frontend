import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../../app.constants';
import {LogMessage} from './logmessage';

@Injectable()
export class LoggingService {


    constructor(private http: HttpClient) {
    }

    private static URL_LOGGING_SERVICE = '/api/log';

    private static HTTP_DEFAULT_OPTIONS = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD),
            'withCredentials': 'true'
        })
    };

    log(logMessage: LogMessage) {
        return this.http.post(LoggingService.URL_LOGGING_SERVICE, logMessage, LoggingService.HTTP_DEFAULT_OPTIONS);
    }
}
