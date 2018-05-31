import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthRouteGuard} from '../../auth.route.guard';
import {SignupService} from './signup.service';
import {SignUpComponent} from './components/signup.component';
import {SignupRoutingModule} from './signup.routing.module';
import {AccountAvailableValidatorDirective} from './account.available.validator.directive';
import {PasswordConfirmationValidatorDirective} from './pasword.confirmation.validator.directive';
import {FieldMatchesValidatorDirective} from './fieldMatches.validator.directive';
import {EmailValidatorDirective} from './email.validator.directive';
import {SignupConfirmationComponent} from './components/signup.confirmation.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SignupRoutingModule
    ],
    declarations: [
        SignUpComponent,
        AccountAvailableValidatorDirective,
        PasswordConfirmationValidatorDirective,
        FieldMatchesValidatorDirective,
        EmailValidatorDirective,
        SignupConfirmationComponent
    ],
    providers: [SignupService, AuthRouteGuard]
})
export class CompanyModule {
}
