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
      'assets/images/shrimpHouseSzcecin/startowa.jpg',
      'assets/images/shrimpHouseSzcecin/01.jpg',
      'assets/images/shrimpHouseSzcecin/02.jpg',
      'assets/images/shrimpHouseSzcecin/03.jpg',
      'assets/images/shrimpHouseSzcecin/04.jpg',
      'assets/images/shrimpHouseSzcecin/05.jpg'
    ];
  }

}
