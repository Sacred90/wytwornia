import { Component, OnInit } from '@angular/core';

//3th part library
import { GalleryService } from 'ng-gallery';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {

  private images;

  constructor(
    private gallery: GalleryService
  ) { }

  ngOnInit() {
    this.images = [
      {
        src: 'assets/images/mieszkaniePiotra/1.jpg',
        thumbnail: 'assets/images/mieszkaniePiotra/1.jpg'
      },
      {
        src: 'assets/images/mieszkaniePiotra/2.jpg',
        thumbnail: 'assets/images/mieszkaniePiotra/2.jpg'
      },
      {
        src: 'assets/images/mieszkaniePiotra/3.jpg',
        thumbnail: 'assets/images/mieszkaniePiotra/3.jpg'
      },
      {
        src: 'assets/images/mieszkaniePiotra/4.jpg',
        thumbnail: 'assets/images/mieszkaniePiotra/4.jpg'
      },
      {
        src: 'assets/images/mieszkaniePiotra/5.jpg',
        thumbnail: 'assets/images/mieszkaniePiotra/5.jpg'
      },
      {
        src: 'assets/images/mieszkaniePiotra/6.jpg',
        thumbnail: 'assets/images/mieszkaniePiotra/6.jpg'
      }
    ];

    this.gallery.load(this.images);
  }

}
