import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project12',
  templateUrl: './project12.component.html',
  styleUrls: ['./project12.component.css']
})
export class Project12Component implements OnInit {

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
