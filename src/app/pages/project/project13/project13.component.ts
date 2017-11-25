import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project13',
  templateUrl: './project13.component.html',
  styleUrls: ['./project13.component.css']
})
export class Project13Component implements OnInit {

  constructor() { }

  private images = [];

  ngOnInit() {
    this.images = [
      'assets/images/miniApartament/startowa.jpg',
      'assets/images/miniApartament/01.jpg',
      'assets/images/miniApartament/02.jpg',
      'assets/images/miniApartament/03.jpg',
      'assets/images/miniApartament/04.jpg',
      'assets/images/miniApartament/05.jpg',
      'assets/images/miniApartament/06.jpg',
      'assets/images/miniApartament/07.jpg',
      'assets/images/miniApartament/08.jpg'
    ];
  }

}
