import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: [
    './styles/main-menu.component.scss'
  ]
})
export class MainMenuComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService) {
  }

  ngOnInit() {
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
    }, 6000);
  }
}
