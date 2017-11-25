import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project5',
  templateUrl: './project5.component.html',
  styleUrls: ['./project5.component.css']
})
export class Project5Component implements OnInit {

  constructor() { }

  private images = [];

  ngOnInit() {
    this.images = [
      'assets/images/skandynawskaPrzestrzen/startowa.jpg',
      'assets/images/skandynawskaPrzestrzen/01.jpg',
      'assets/images/skandynawskaPrzestrzen/02.jpg',
      'assets/images/skandynawskaPrzestrzen/03.jpg',
      'assets/images/skandynawskaPrzestrzen/04.jpg',
      'assets/images/skandynawskaPrzestrzen/05.jpg'
    ];
  }

}
