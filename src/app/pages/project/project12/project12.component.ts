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
      'assets/images/wlasne25/startowa.jpg',
      'assets/images/wlasne25/01.jpg',
      'assets/images/wlasne25/02.jpg',
    ];
  }

}
