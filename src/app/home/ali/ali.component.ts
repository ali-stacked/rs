import {Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotificationTemplateComponent } from '../../shared/notification-template/notification-template.component';
import { Route, ActivatedRoute} from '@angular/router';
import { SideMenusService } from '../../core/side-menus/side-menus.service';
import * as $ from 'jquery';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-notifications',
  templateUrl: './ali.component.html',
  styleUrls: ['./ali.component.scss']
})
export class AliComponent implements OnInit {

  mySnackBarRef: any;
  articles: any;
  loc$: Observable<string>;
  loc: string;

  constructor(
              public snackBar: MatSnackBar,
              public menuService: SideMenusService,
              private route: ActivatedRoute) {

  }

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

  showNotification(vpos, hpos, type, icon = ''): void {
    // for more info about Angular Material snackBar check: https://material.angular.io/components/snack-bar/overview
    // debugger;
    this.mySnackBarRef = this.snackBar.openFromComponent(NotificationTemplateComponent, {
       data: {
         message: 'This is a notification positioned in the ' + vpos + ' ' + hpos,
         icon,
         type,
         dismissible: true
         // you can add everything you want here
       },
       duration: 3000,
       horizontalPosition: hpos, // 'start' | 'center' | 'end' | 'left' | 'right'
       verticalPosition: vpos, // 'top' | 'bottom'
       panelClass: ['notification-wrapper']
    });
    // this is to be able to close it from the NotificationComponent
    this.mySnackBarRef.instance.snackBarRef = this.mySnackBarRef;
  }
}
