import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DynamicFormRoutingModule} from './dynamic.form-routing.module';
import {DynamicFormComponent} from './components/dynamic.form.component';
import {DynamicFormService} from './dynamic.form.service';
import {DynamicFormRouteGuard} from "./dynamic.form.route.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DynamicFormRoutingModule
  ],
  declarations: [
    DynamicFormComponent
  ],
  providers: [DynamicFormService, DynamicFormRouteGuard]
})
export class DynamicFormModule {
}
