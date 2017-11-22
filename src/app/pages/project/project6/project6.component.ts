import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project6',
  templateUrl: './project6.component.html',
  styleUrls: ['./project6.component.css']
})
export class Project6Component implements OnInit {

  constructor() { }

  private images = [];

  ngOnInit() {
    this.images = [
      'assets/images/shrimphouse/1.jpg',
      'assets/images/shrimphouse/2.jpg',
      'assets/images/shrimphouse/3.jpg',
      'assets/images/shrimphouse/4.jpg',
      'assets/images/shrimphouse/5.jpg'
    ];
  }
}
