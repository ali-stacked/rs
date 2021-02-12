import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// /** echarts theme: */
import '../../../theme/echarts-theme.js';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {DashboardsService} from "../../services/dashboards.service";
import {NosqlService} from "../../services/nosql.service";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: [
    './styles/contact-us.component.scss',
    './styles/contact-us.responsive.scss'
  ]
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private route: ActivatedRoute,
             private service: DashboardsService,
              private formBuilder: FormBuilder
  ) {}
  team: any;
  adv: any;



  ngOnInit() {
    this.contactForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      company: new FormControl(''),
      email: new FormControl(''),
      inquiry: new FormControl('')
    });
  }

  // submit() {
  //   const data = this.contactForm.value;
  //
  //   this.service.addContact(data)
  //   .subscribe (
  //     res => {
  //       // if signup success then:
  //       this.router.navigate(['home/ali']);
  //     },
  //     err => {
  //       // else if signup fails
  //       // show error
  //     }
  //   );
  // }

}
