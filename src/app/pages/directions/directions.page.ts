import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})
export class DirectionsPage implements OnInit {
  lng:string;
  constructor() { }

  ngOnInit() {

    this.lng = localStorage.getItem('lng');
    console.log(this.lng)

  }

}
