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
      'assets/images/shrimphouse/1.jpg',
      'assets/images/shrimphouse/2.jpg',
      'assets/images/shrimphouse/3.jpg',
      'assets/images/shrimphouse/4.jpg',
      'assets/images/shrimphouse/5.jpg'
    ];
  }

}
