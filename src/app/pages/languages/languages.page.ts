import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss'],
})
export class LanguagesPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  GoHome(){
		this.router.navigate([ '/help' ]);

  }

}
