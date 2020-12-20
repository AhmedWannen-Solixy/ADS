import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-languages",
  templateUrl: "./languages.page.html",
  styleUrls: ["./languages.page.scss"],
})
export class LanguagesPage implements OnInit {
  constructor(public translate: TranslateService, private router: Router) {}

  ngOnInit() {}

  pickFlag(flag: string) {
    this.translate.setDefaultLang(flag);
    localStorage.setItem("lng", flag);

    this.router.navigateByUrl("/directions");
  }
}
