import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatChipInputEvent
} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { BigData } from '../../interfaces/tennis.interface';
import { TennisService } from '../../services/tennis.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA, DialogPosition} from "@angular/material/dialog";
import {AddDataComponent} from "../dialogs/add-data/add-data.component";
import {MatButton} from "@angular/material/button";
import {AlertTemplateComponent} from "../../shared/alert-template/alert-template.component";

@Component({
  selector: 'app-big-data',
  templateUrl: './big-data.component.html',
  styleUrls: ['./big-data.component.scss'],
  providers: [ DatePipe ]
})
export class BigDataComponent implements OnInit {


  // Filters for the smart table
  filtersForm: FormGroup;
  filtersVisible = true;
  toggleFiltersLabel = 'Hide filters';
  tennisStats;
  displayedColumns: string[] = ['singles_winner_name',
    'tourney_dates',
    'tourney_conditions',
    'tourney_location',
    'tourney_name',
    'tourney_surface',
    'tourney_year',
    'singles_winner_player_id',
    'singles_winner_player_slug'
  ];
    dataSource: any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatButton, {static: true}) button: MatButton;

  // Data from the resolver
  originalData = [];

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  categories = [];

  constructor(
    private route: ActivatedRoute,
    private tennisService: TennisService,
    public dialog: MatDialog,
    private datePipe: DatePipe
  ) {
    // tslint:disable-next-line:no-string-literal
    this.originalData = route.snapshot.data['bigData'];
    this.dataSource = new MatTableDataSource<BigData>(this.originalData);

    this.filtersForm = new FormGroup({
      search: new FormControl(''),
      categories: new FormControl([[]]),
      tourney_dates: new FormControl('')
    });
    this.filtersForm.valueChanges.subscribe(form => this.applyFilters(form));
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    // define a custom sort for the date field
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'tourney_dates': return new Date(item.date);
        default: return item[property];
      }
    };
    this.dataSource.sort = this.sort;
  }
  buildRecord(event) {
    const dialogPosition: DialogPosition = {
      top: event.y + 'px',
      left: event.x + 'px'
    };
    const dialogRef = this.dialog.open(AddDataComponent, {
      position: dialogPosition,
      width: '100vh',
      height:'90vh'
        });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog output:');
      // To get the output data from the modal:
      // var output = result;
    });
  }


  search(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Run the filters for the table
  applyFilters(form): void {
    const tourney_dates = form.tourney_dates ? new Date(form.tourney_dates.year, (form.tourney_dates.month - 1), form.tourney_dates.day) : '';
    // Note: JavaScript counts months from 0 to 11.

    const results = [];
    this.originalData.forEach(row => {
      const filterDate = this.datePipe.transform(tourney_dates, 'yyyy-MM-dd');
      if (
        (this.categoryContains(row.category, this.categories)) &&
        ((form.date === '') || (new Date(filterDate) > new Date(row.tourney_dates)))
      ) {
        results.push(row);
      }
    });
    this.dataSource.data = results;
  }

  // Show or hide the available filters
  toggleFilters(): void {
    this.filtersVisible = !this.filtersVisible;
    this.toggleFiltersLabel = this.filtersVisible ? 'Hide filters' : 'Show filters';
  }

  // Reset all the filters values
  clearFilters(): void {
    this.filtersForm.reset({
      search: '',
      categories: [],
      tourney_dates: ''
    });

    this.categories = [];
    this.resetDatePicker();
    this.search('');
    this.applyFilters(this.filtersForm.value);
  }

  resetDatePicker(): void {
    this.filtersForm.controls.tourney_dates.reset('');
  }

  // Check if a string contains another
  stringContains(string1: string, string2: string): boolean {
    return (string1.toLowerCase().indexOf(string2.toLowerCase()) > -1);
  }

  // // Check if a category contains a string
  categoryContains(rowCategory: string, categories: any[]): boolean {
    for (const category of categories) {
      if (this.stringContains(rowCategory, category)) {
        return true;
      }
    }
    return (categories.length === 0);
  }

  // Category tags
  addCategory(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our Category
    if ((value || '').trim()) {
      this.categories.push(value.trim());
      this.applyFilters(this.filtersForm.value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeCategory(interest: string): void {
    const index = this.categories.indexOf(interest);
    if (index >= 0) {
      this.categories.splice(index, 1);
      this.applyFilters(this.filtersForm.value);
    }
  }






}
