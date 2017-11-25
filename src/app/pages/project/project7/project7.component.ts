import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project7',
  templateUrl: './project7.component.html',
  styleUrls: ['./project7.component.css']
})
export class Project7Component implements OnInit {

  constructor() { }

  private images = [];

  ngOnInit() {
    this.images = [
      'assets/images/malucha/startowa.jpg',
      'assets/images/malucha/01.jpg',
      'assets/images/malucha/02.jpg',
      'assets/images/malucha/03.jpg',
      'assets/images/malucha/04.jpg',
      'assets/images/malucha/05.jpg'
    ];
  }

}
