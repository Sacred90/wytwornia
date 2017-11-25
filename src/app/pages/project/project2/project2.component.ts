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
        'assets/images/domPodWroclawiem/startowa.jpg',
        'assets/images/domPodWroclawiem/01.jpg',
        'assets/images/domPodWroclawiem/02.jpg',
        'assets/images/domPodWroclawiem/03.jpg',
        'assets/images/domPodWroclawiem/04.jpg',
      ];
    }

}
