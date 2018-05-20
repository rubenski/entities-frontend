import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthRouteGuard} from '../../auth.route.guard';
import {SignupComponent} from './components/signup.component';

const formRoutes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'company/edit', component: SignupComponent, canActivate: [AuthRouteGuard]}
];

@NgModule({
    imports: [
        RouterModule.forChild(formRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SignupRoutingModule {
}
