import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthRouteGuard} from '../../auth.route.guard';
import {CompanyService} from './company.service';
import {SignupComponent} from './components/signup.component';
import {CompanyRoutingModule} from './company.routing.module';
import {CompanyEmailValidatorDirective} from './company.email.validator.directive';
import {PasswordConfirmationValidatorDirective} from './pasword.confirmation.validator.directive';
import {FieldMatchesValidatorDirective} from './fieldMatches.validator.directive';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CompanyRoutingModule
    ],
    declarations: [
        SignupComponent,
        CompanyEmailValidatorDirective,
        PasswordConfirmationValidatorDirective,
        FieldMatchesValidatorDirective
    ],
    providers: [CompanyService, AuthRouteGuard]
})
export class CompanyModule {
}
