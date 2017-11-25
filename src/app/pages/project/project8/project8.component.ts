import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project8',
  templateUrl: './project8.component.html',
  styleUrls: ['./project8.component.css']
})
export class Project8Component implements OnInit {

  constructor() { }

  private images = [];

  ngOnInit() {
    this.images = [
      'assets/images/katy/startowa.jpg',
      'assets/images/katy/01.jpg',
      'assets/images/katy/02.jpg',
      'assets/images/katy/03.jpg',
      'assets/images/katy/04.jpg',
      'assets/images/katy/05.jpg',
      'assets/images/katy/06.jpg',
      'assets/images/katy/07.jpg',
      'assets/images/katy/08.jpg'
    ];
  }

}
