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
        title: "ANGIELSKIE WNĘTRZE",
        description: "Projekt wnętrz: mieszkanie <br> Lokalizacja: Wrocław <br> Powierzchnia: 60m2"
      },
      {
        img: "assets/images/projectsThmub/2.jpg",
        title: "DOM POD WROCŁAWIEM",
        description: "Projekt wnętrz: dom szeregowy <br> Lokalizacnja: Gądów <br> Powierzchnia: 100m2"
      },
      {
        img: "assets/images/projectsThmub/3.jpg",
        title: "LUKSUSOWY DOM",
        description: "Projekt wnętrzt: Dom jednorodzinny <br> Lokalizacja: Ratowice <br> Powierzchnia:150m2"
      },
      {
        img: "assets/images/projectsThmub/4.jpg",
        title: "CHŁODNE BARWY WE WNĘTRZU",
        description: "Projekt wnętrz: mieszkanie <br> Lokalizacja: Wrocław <br> Powierzchnia: 40m2"
      },
      {
        img: "assets/images/projectsThmub/5.jpg",
        title: "SKANDYNAWSKA PRZESTRZEŃ",
        description: "Projekt wnętrz: mieszkanie <br> Lokalizacja: Wrocław <br> Powierzchnia: 53m2"
      },
      {
        img: "assets/images/projectsThmub/6.jpg",
        title: "PRZYTULNE WNĘTRZE",
        description: "Projekt wnętrz: mieszkanie <br> Lokalizacja: Wrocław <br> Powierzchnia: 70m2"

      },
      {
        img: "assets/images/projectsThmub/7.jpg",
        title: "PRZESTRZEŃ MALUCHA",
        description: "Projekt wnętrz: mieszkanie <br> Lokalizacja: Smolec <br> Powierzchnia: 28m2"
      },
      {
        img: "assets/images/projectsThmub/8.jpg",
        title: "DOM W KĄTACH",
        description: "Projekt wnętrz: dom szeregowy <br> Lokalizacja: Kąty Wrocławskie <br> Powierzchnia: 67m2"
      },
      {
        img: "assets/images/projectsThmub/9.jpg",
        title: "MIESZKANIE STUDENTA",
        description: "Projekt wnętrz: mieszkanie <br> Lokalizacja: Wrocław <br> Powierzchnia: 45m2"
      },
      {
        img: "assets/images/projectsThmub/10.jpg",
        title: "SHRIMP HOUSE WARSZAW",
        description: "Projekt wnętrz: Restauracja <br> Lokalizacja: Warszawa <br> Powierzchnia: 82m2"
      },
      {
        img: "assets/images/projectsThmub/11.jpg",
        title: "SHRIMP HOUSE SZCZECIN",
        description: "Projekt wnętrz: Rastauracja <br> Lokalizacja: Szczecin <br> Powierzchnia: 106m2"
      },
      {
        img: "assets/images/projectsThmub/12.jpg",
        title: "WŁASNE 25 M",
        description: "Projekt wnętrz: mieszkanie <br> Lokalizacja: Wrocław <br> Powierzchnia: 25m2"
      },
      {
        img: "assets/images/projectsThmub/13.jpg",
        title: "PRZYTULNY MINI APARTAMENT",
        description: "Projekt wnętrz: mieszkanie <br> Lokalizacja: Wrocław <br> Powierzchnia: 40m2"
      },
    ]
    
  }

}
