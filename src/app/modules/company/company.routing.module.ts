import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthRouteGuard} from '../../auth.route.guard';
import {CompanyComponent} from './components/company.component';

const formRoutes: Routes = [
    {path: 'signup', component: CompanyComponent},
    {path: 'company/edit', component: CompanyComponent, canActivate: [AuthRouteGuard]}
];

@NgModule({
    imports: [
        RouterModule.forChild(formRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CompanyRoutingModule {
}
