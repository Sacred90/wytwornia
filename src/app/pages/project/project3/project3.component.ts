import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css']
})
export class Project3Component implements OnInit {

  constructor() { }

  private images = [];

  ngOnInit() {
    this.images = [
      'assets/images/luksusowy/startowa.jpg',
      'assets/images/luksusowy/01.jpg',
      'assets/images/luksusowy/02.jpg',
      'assets/images/luksusowy/03.jpg',
      'assets/images/luksusowy/04.jpg',
      'assets/images/luksusowy/05.jpg'
    ];
  }
}
