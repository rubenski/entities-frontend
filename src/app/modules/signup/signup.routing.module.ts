import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthRouteGuard} from '../../auth.route.guard';
import {SignUpComponent} from './components/signup.component';

const formRoutes: Routes = [
    {path: 'signup', component: SignUpComponent},
    {path: 'company/edit', component: SignUpComponent, canActivate: [AuthRouteGuard]}
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
