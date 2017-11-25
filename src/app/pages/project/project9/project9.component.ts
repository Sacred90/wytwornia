import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project9',
  templateUrl: './project9.component.html',
  styleUrls: ['./project9.component.css']
})
export class Project9Component implements OnInit {

  constructor() { }
  private images = [];

  ngOnInit() {
    this.images = [
      'assets/images/mieszkanieStudenta/startowa.jpg',
      'assets/images/mieszkanieStudenta/01.jpg',
      'assets/images/mieszkanieStudenta/02.jpg',
      'assets/images/mieszkanieStudenta/03.jpg',
      'assets/images/mieszkanieStudenta/04.jpg',
    ];
  }

}
