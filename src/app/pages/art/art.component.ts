import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  constructor() { }
  artImages = [];
  ngOnInit() {
    this.artImages = [
      "assets/images/art/art_1.jpg",
      "assets/images/art/art_2.jpg",
      "assets/images/art/art_3.jpg",
      "assets/images/art/art_4.jpg",
      "assets/images/art/art_5.jpg",
      "assets/images/art/art_6.jpg",
      "assets/images/art/art_7.jpg",
      "assets/images/art/art_8.jpg",
      "assets/images/art/art_9.jpg"
    ]
  }

}
