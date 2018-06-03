import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {LoggingService} from './modules/shared/logging.service';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {StackTrace} from 'stacktrace-js';
import {LogMessage} from './modules/shared/logmessage';

// Taken from https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error) {
        console.log('Handling error....');
        const loggingService = this.injector.get(LoggingService);
        const location = this.injector.get(LocationStrategy);
        const message = error.message ? error.message : error.toString();
        const url = location instanceof PathLocationStrategy
            ? location.path() : '';

        // get the stack trace, lets grab the last 10 stacks only
        StackTrace.fromError(error).then(stackframes => {
            const stackString = stackframes
                .splice(0, 20)
                .map(function(sf) {
                    return sf.toString();
                }).join('\n');
            // log on the server
            loggingService.log(new LogMessage(message, url, stackString, 'ERROR'));
        });
        throw error;
    }

}
