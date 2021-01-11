import {Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SideMenusService } from '../../core/side-menus/side-menus.service';
import * as $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-notifications',
  templateUrl: './ali.component.html',
  styleUrls: ['./ali.component.scss']
})
export class AliComponent implements OnInit {

  constructor(
      private spinner: NgxSpinnerService,
      public menuService: SideMenusService,
      private route: ActivatedRoute) {}

    ngOnInit() {
      (function() {
        let lead = $('.lead');
        let leadIndex = -1;
        function showNextLead() {
          ++leadIndex;
          lead.eq(leadIndex % lead.length)
            .fadeIn(3500)
            .delay(3000)
            .fadeOut(3500, showNextLead);
        }
        showNextLead();
      })();
  }
  showSpeed() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 6000);
  }
}
