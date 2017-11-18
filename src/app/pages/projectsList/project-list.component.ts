import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  public projects;

  ngOnInit() {

    this.projects = [
      {
        img: "assets/images/projectsThmub/1.jpg",
        descrition: "własne 25 metrów"
      },
      {
        img: "assets/images/projectsThmub/2.jpg",
        descrition: "przytulny mini apartament"
      },
      {
        img: "assets/images/projectsThmub/3.jpg",
        descrition: "Shrimp House Szczecin"
      },
      {
        img: "assets/images/projectsThmub/4.jpg",
        descrition: "własne 25 metrów"
      },
      {
        img: "assets/images/projectsThmub/5.jpg",
        descrition: "przytulny mini apartament"
      },
      {
        img: "assets/images/projectsThmub/6.jpg",
        descrition: "Shrimp House Szczecin"
      },
      {
        img: "assets/images/projectsThmub/7.jpg",
        descrition: "własne 25 metrów"
      },
      {
        img: "assets/images/projectsThmub/8.jpg",
        descrition: "przytulny mini apartament"
      },
      {
        img: "assets/images/projectsThmub/9.jpg",
        descrition: "Shrimp House Szczecin"
      },
      {
        img: "assets/images/projectsThmub/10.jpg",
        descrition: "Shrimp House Szczecin"
      },
      {
        img: "assets/images/projectsThmub/11.jpg",
        descrition: "Shrimp House Szczecin"
      },
      {
        img: "assets/images/projectsThmub/12.jpg",
        descrition: "Shrimp House Szczecin"
      },
      {
        img: "assets/images/projectsThmub/13.jpg",
        descrition: "Shrimp House Szczecin"
      },
    ]
    
  }

}
