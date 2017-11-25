import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project4',
  templateUrl: './project4.component.html',
  styleUrls: ['./project4.component.css']
})
export class Project4Component implements OnInit {

  constructor() { }

  private images = [];

  ngOnInit() {
    this.images = [
      'assets/images/chlodneBarwy/startowa.jpg',
      'assets/images/chlodneBarwy/01.jpg',
      'assets/images/chlodneBarwy/02.jpg',
      'assets/images/chlodneBarwy/03.jpg',
      'assets/images/chlodneBarwy/04.jpg',
      'assets/images/chlodneBarwy/05.jpg',
      'assets/images/chlodneBarwy/06.jpg',
      'assets/images/chlodneBarwy/07.jpg',
      'assets/images/chlodneBarwy/08.jpg',
      'assets/images/chlodneBarwy/09.jpg'
    ];
  }

}
