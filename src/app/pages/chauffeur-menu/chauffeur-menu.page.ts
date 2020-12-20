import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chauffeur-menu',
  templateUrl: './chauffeur-menu.page.html',
  styleUrls: ['./chauffeur-menu.page.scss'],
})
export class ChauffeurMenuPage implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() { }

}
