import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthRouteGuard} from '../../auth.route.guard';
import {SignupService} from './signup.service';
import {SignupComponent} from './components/signup.component';
import {SignupRoutingModule} from './signup.routing.module';
import {AccountAvailableValidatorDirective} from './account.available.validator.directive';
import {PasswordConfirmationValidatorDirective} from './pasword.confirmation.validator.directive';
import {FieldMatchesValidatorDirective} from './fieldMatches.validator.directive';
import {EmailValidatorDirective} from './email.validator.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SignupRoutingModule
    ],
    declarations: [
        SignupComponent,
        AccountAvailableValidatorDirective,
        PasswordConfirmationValidatorDirective,
        FieldMatchesValidatorDirective,
        EmailValidatorDirective
    ],
    providers: [SignupService, AuthRouteGuard]
})
export class CompanyModule {
}
