import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {


  constructor() { }

  private images = [];
  
    ngOnInit() {
      this.images = [
        'assets/images/mieszkaniePiotra/1.jpg',
        'assets/images/mieszkaniePiotra/2.jpg',
        'assets/images/mieszkaniePiotra/3.jpg',
        'assets/images/mieszkaniePiotra/4.jpg',
        'assets/images/mieszkaniePiotra/5.jpg',
        'assets/images/mieszkaniePiotra/6.jpg'
      ];
    }

}
