import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthRouteGuard} from '../../auth.route.guard';
import {CompanyService} from './company.service';
import {CompanyComponent} from './components/company.component';
import {CompanyRoutingModule} from './company.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CompanyRoutingModule
    ],
    declarations: [
        CompanyComponent
    ],
    providers: [CompanyService, AuthRouteGuard]
})
export class CompanyModule {
}
