import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project10',
  templateUrl: './project10.component.html',
  styleUrls: ['./project10.component.css']
})
export class Project10Component implements OnInit {

  constructor() { }

  private images = [];

  ngOnInit() {
    this.images = [
      'assets/images/ShrimpHouseWarszawa/startowa.jpg',
      'assets/images/ShrimpHouseWarszawa/01.jpg',
      'assets/images/ShrimpHouseWarszawa/02.jpg',
      'assets/images/ShrimpHouseWarszawa/03.jpg',
      'assets/images/ShrimpHouseWarszawa/04.jpg',
      'assets/images/ShrimpHouseWarszawa/05.jpg',
      'assets/images/ShrimpHouseWarszawa/06.jpg'
    ];
  }
}
