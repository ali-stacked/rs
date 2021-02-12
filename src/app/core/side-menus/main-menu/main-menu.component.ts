import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SideMenusService } from '../side-menus.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: [
    './styles/main-menu.component.scss'
  ]
})
export class MainMenuComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,
              private sideMenusService: SideMenusService

              ) {
  }

  ngOnInit() {
  }
  toggleMainMenu(): void {
    this.sideMenusService.toggleMainMenuSubject.next('toggle');
  }
  showQuick() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
