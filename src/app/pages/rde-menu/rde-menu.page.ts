import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rde-menu',
  templateUrl: './rde-menu.page.html',
  styleUrls: ['./rde-menu.page.scss'],
})
export class RdeMenuPage implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
