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
    this.images = ['assets/images/kawalerka/1.jpg','assets/images/kawalerka/2.jpg','assets/images/kawalerka/3.jpg']
  }
}
