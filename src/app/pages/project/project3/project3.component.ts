import { Component, OnInit } from '@angular/core';

//3th part library
import { GalleryService } from 'ng-gallery';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css']
})
export class Project3Component implements OnInit {

  constructor(
    private gallery: GalleryService
  ) { }

  private images;

  ngOnInit() {
    this.images = [
      {
        src: 'assets/images/shrimphouse/1.jpg',
        thumbnail: 'assets/images/shrimphouse/1.jpg'
      },
      {
        src: 'assets/images/shrimphouse/2.jpg',
        thumbnail: 'assets/images/shrimphouse/2.jpg'
      },
      {
        src: 'assets/images/shrimphouse/3.jpg',
        thumbnail: 'assets/images/shrimphouse/3.jpg'
      },
      {
        src: 'assets/images/shrimphouse/4.jpg',
        thumbnail: 'assets/images/shrimphouse/4.jpg'
      },
      {
        src: 'assets/images/shrimphouse/5.jpg',
        thumbnail: 'assets/images/shrimphouse/5.jpg'
      }
    ];

    this.gallery.load(this.images);
  }

}
