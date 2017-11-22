import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project11',
  templateUrl: './project11.component.html',
  styleUrls: ['./project11.component.css']
})
export class Project11Component implements OnInit {

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
