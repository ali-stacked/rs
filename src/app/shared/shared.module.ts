import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsModule as Ng2ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {DropZoneDirective} from "../directives/dropzone";
import {FooterComponent} from "./footer/footer.component";
import { MaterialFileInputModule } from 'ngx-material-file-input';


import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatTableModule,
  MatTabsModule,
  MatProgressBarModule,
  MatSortModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatInputModule,
  MatNativeDateModule,
  MatChipsModule,
  MatSelectModule,
  MatStepperModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSliderModule
} from '@angular/material';
import {DonutTemplateComponent} from "./donut-template/donut-template.component";
import {
  NgbButtonsModule,
  NgbProgressbarModule,
  NgbDatepickerModule,
  NgbRatingModule,
  NgbTimepickerModule,
  NgbPopoverModule,
  NgbCarouselModule,
  NgbTabsetModule,
  NgbTypeaheadModule,
  NgbDropdownModule
} from '@ng-bootstrap/ng-bootstrap';


// import { HttpClientModule } from '@angular/common/http';

import { ShellModule } from '../shell/shell.module';
import { FileUploaderDirective } from './file-uploader/file-uploader.directive';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';
import { ShowHideInputDirective } from './show-hide-password/show-hide-input.directive';
import { AlertTemplateComponent } from './alert-template/alert-template.component';
import { NotificationTemplateComponent } from './notification-template/notification-template.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { KpiChartComponent } from './kpi-chart/kpi-chart.component';
import { DonutVizComponent } from './donut-viz/donut-viz.component';
import { DraggableDirectiveComponent } from './draggable-directive/draggable-directive.component';
import {NewPlayerDialog} from './dialogs/new-player/new-player.component';
import { StockGraphComponent } from './stock-graph/stock-graph.component';
import { InsightsComponent } from '../home/insights/insights.component';

@NgModule({
  declarations: [
    FileUploaderDirective,
    ShowHidePasswordComponent,
    ShowHideInputDirective,
    AlertTemplateComponent,
    NotificationTemplateComponent,
    KpiChartComponent,
    DonutVizComponent,
      DropZoneDirective,
      NewPlayerDialog,
      DraggableDirectiveComponent,
      FooterComponent,
      DonutTemplateComponent,
      StockGraphComponent,
      InsightsComponent
  ],
  entryComponents: [
    AlertTemplateComponent,
    NotificationTemplateComponent,
      DonutTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxEchartsModule,
    NgxChartsModule,
    Ng2ChartsModule,
    FormsModule,
    ShellModule,
    MatIconModule,
    MaterialFileInputModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgxSpinnerModule
    // HttpClientModule
  ],
    exports: [
        // Re-export these modules to prevent repeated imports (see: https://angular.io/guide/ngmodule#re-exporting-other-modules)
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // HttpClientModule,
        ShellModule,
        RouterModule,
        NgxEchartsModule,
        MaterialFileInputModule,
        NgxChartsModule,
        Ng2ChartsModule,
        FileUploaderDirective,
        DonutTemplateComponent,
        InsightsComponent,
        KpiChartComponent,
        NewPlayerDialog,
        FooterComponent,
        DonutVizComponent,
        DropZoneDirective,
        ShowHidePasswordComponent,
        ShowHideInputDirective,
        AlertTemplateComponent,
        NotificationTemplateComponent,
        // angular material modules
        MatTableModule,
        MatTabsModule,
        MatPaginatorModule,
        MatSortModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatInputModule,
        MatNativeDateModule,
        MatChipsModule,
        MatSelectModule,
        MatStepperModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSliderModule,
        MatIconModule,  // needed to use the MatIconRegistry to register our own icons
        // ng bootstrap modules
        NgbButtonsModule,
        NgbProgressbarModule,
        NgbDatepickerModule,
        NgbRatingModule,
        NgbTimepickerModule,
        NgbPopoverModule,
        NgbCarouselModule,
        NgbTabsetModule,
        NgbTypeaheadModule,
        NgxSpinnerModule,
        NgbDropdownModule
    ]
})
export class SharedModule { }
