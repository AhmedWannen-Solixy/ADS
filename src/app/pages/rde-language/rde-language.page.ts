import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-rde-language',
  templateUrl: './rde-language.page.html',
  styleUrls: ['./rde-language.page.scss'],
})
export class RdeLanguagePage implements OnInit {

  constructor(public translate: TranslateService, private router: Router) { }

  ngOnInit() {
  }
  pickFlag(flag: string) {
    this.translate.setDefaultLang(flag);
    localStorage.setItem("lng", flag);
    console.log(flag)
    this.router.navigateByUrl("/rde-menu");
  }

}
