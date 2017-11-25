import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {

  constructor() { }


  private images;

  ngOnInit() {
    this.images = ['assets/images/angielskie_wnetrze/1_startowy.jpg','assets/images/angielskie_wnetrze/1_2.jpg','assets/images/angielskie_wnetrze/1_3.jpg']
  }
}
