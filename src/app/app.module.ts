import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './modules/home/components/home.component';
import {PageNotFoundComponent} from './modules/shared/components/pagenotfound.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductModule} from './modules/product/product.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginModule} from './modules/login/login.module';
import {CsrfInterceptor} from './csrf.interceptor';
import {CookieService} from 'ngx-cookie-service';
import {DynamicFormModule} from './modules/dynamicform/dynamic.form.module';
import {ErrorInterceptor} from './expired.token.interceptor';
import {ServiceCallWrapper} from './service.call.wrapper';
import {CompanyModule} from './modules/signup/signup.module';
import {GlobalErrorHandler} from './global.error.handler';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ProductModule,
        DynamicFormModule,
        CompanyModule,
        LoginModule,
        HttpClientModule,
        AppRoutingModule // AppRoutingModule must be last, because it contains the most generic route matching patterns
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CsrfInterceptor,
            multi: true
        }, {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler
        },
        CookieService,
        ServiceCallWrapper
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
