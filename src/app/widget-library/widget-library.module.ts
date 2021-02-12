import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFormsComponent } from './material-forms/material-forms.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StepperComponent } from './stepper/stepper.component';
import { ExtendedControlsComponent } from './extended-controls/extended-controls.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { ControlsAndValidationsComponent } from './controls-and-validations/controls-and-validations.component';
import { FormsService } from './forms.service';
import { AgileComponent } from './agile/agile.component';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

export const widgyRoutes = [
  {
    path: '',
    redirectTo: 'agile'
  },
  {
    path: 'forms',
    component: MaterialFormsComponent,
  },
  {
    path: 'stepper',
    component: StepperComponent,
  },
  {
    path: 'controls-and-validations',
    component: ControlsAndValidationsComponent,
  },
  {
    path: 'extended-controls',
    component: ExtendedControlsComponent,
  },
  {
    path: 'agile',
    component: AgileComponent
  },
  {
    path: 'form-layouts',
    component: FormLayoutsComponent,
  }
];

@NgModule({
  declarations: [
    MaterialFormsComponent,
    StepperComponent,
    ExtendedControlsComponent,
    FormLayoutsComponent,
    ControlsAndValidationsComponent,
    AgileComponent,
    CreateDialogComponent
  ],
  providers: [
    FormsService
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(widgyRoutes)
  ],
  exports: [AgileComponent]
})

export class WidgetLibraryModule { }
