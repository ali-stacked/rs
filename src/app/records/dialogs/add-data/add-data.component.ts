import { Component, OnInit } from '@angular/core';
import { Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl ,FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TennisService} from "../../../services/tennis.service";

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {

  playerForm: FormGroup;
  singles_winner_player_slug;

  constructor(public dialogRef: MatDialogRef<AddDataComponent>,
              private router: Router,
              private service: TennisService,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.playerForm = new FormGroup({
      singles_winner_name: new FormControl(''),
      singles_winner_player_slug: new FormControl(''),
      tourney_name: new FormControl(''),
      tourney_surface: new FormControl(''),
      tourney_year: new FormControl('')

    });
  }

  createAccount(): void {
    this.dialogRef.close();
    console.log(this.playerForm.value)
  }

  cancel() : void {
    this.dialogRef.close();
  }

  addRecord() {
    this.service.addDocTennis(this.playerForm.value);
    this.router.navigateByUrl(`/records/player/{{this.singles_winner_player_slug}}/detail`);
  }
}
