import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DynamicFormComponent} from './components/dynamic.form.component';
import {AuthRouteGuard} from '../../auth.route.guard';

const formRoutes: Routes = [
  {path: 'forms', component: DynamicFormComponent, canActivate: [AuthRouteGuard]},
  {path: 'form/:id', component: DynamicFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(formRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DynamicFormRoutingModule {
}
