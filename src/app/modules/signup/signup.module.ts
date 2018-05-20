import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthRouteGuard} from '../../auth.route.guard';
import {CompanyService} from './company.service';
import {SignupComponent} from './components/signup.component';
import {SignupRoutingModule} from './signup.routing.module';
import {AccountEmailValidatorDirective} from './account.email.validator.directive';
import {PasswordConfirmationValidatorDirective} from './pasword.confirmation.validator.directive';
import {FieldMatchesValidatorDirective} from './fieldMatches.validator.directive';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SignupRoutingModule
    ],
    declarations: [
        SignupComponent,
        AccountEmailValidatorDirective,
        PasswordConfirmationValidatorDirective,
        FieldMatchesValidatorDirective
    ],
    providers: [CompanyService, AuthRouteGuard]
})
export class CompanyModule {
}
