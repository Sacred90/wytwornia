import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project6',
  templateUrl: './project6.component.html',
  styleUrls: ['./project6.component.css']
})
export class Project6Component implements OnInit {

  constructor() { }

  private images = [];

  ngOnInit() {
    this.images = [
      'assets/images/przytulneWnetrze/startowa.jpg',
      'assets/images/przytulneWnetrze/01.jpg',
      'assets/images/przytulneWnetrze/02.jpg',
      'assets/images/przytulneWnetrze/03.jpg',
      'assets/images/przytulneWnetrze/04.jpg',
      'assets/images/przytulneWnetrze/05.jpg',
      'assets/images/przytulneWnetrze/06.jpg',
      'assets/images/przytulneWnetrze/07.jpg',
      'assets/images/przytulneWnetrze/08.jpg',
      'assets/images/przytulneWnetrze/09.jpg',
      'assets/images/przytulneWnetrze/10.jpg',
      'assets/images/przytulneWnetrze/11.jpg',
      'assets/images/przytulneWnetrze/12.jpg'
    ];
  }
}
