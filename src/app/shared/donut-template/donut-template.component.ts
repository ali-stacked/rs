import { Component, Inject, Input,
  OnInit, Optional } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {Donut} from "../../interfaces/donut";



@Component({
  selector: 'app-donut-template',
  templateUrl: './donut-template.component.html',
  styleUrls: ['./donut-template.component.scss']
})

export class DonutTemplateComponent implements OnInit {
  @Input() usValue: number;
  @Input() indiaValue: number;
  @Input() italyValue: number;
  @Input() ukValue: number;
  @Input() chinaValue: number;
  donutForm: FormGroup;
  baseClass = 'notification alert';
  classes = '';
  iconType: string;
  iconPosition: string;
  title: string;
  text: string;
  options: false;
  input: false;
  button: string;
  inputData: string;

  /** The instance of the component making up the content of the snack bar. */
  snackBarRef: MatSnackBarRef<DonutTemplateComponent>;

  constructor(@Optional() @Inject(MAT_SNACK_BAR_DATA) public data: any) {
    if (data) {
      this.usValue = data.usValue;
      this.iconType = data.iconType;
      this.iconPosition = data.iconPosition ? data.iconPosition : 'default';
      this.indiaValue = data.indiaValue;
      this.italyValue = data.italyValue;
      this.ukValue = data.ukValue;
      this.chinaValue = data.chinaValue;
    }
  }

  /** Dismisses the snack bar. */
  dismiss(): void {
    if (this.snackBarRef) {
      this.snackBarRef.dismiss();
    }
  }

  ngOnInit(): void {
    this.classes = this.baseClass;
    // this.classes += (this.dismissible ? ' alert-dismissible' :  '');
    // this.classes += (this.type ? ' alert-' + this.type :  '');
  }

}
