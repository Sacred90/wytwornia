import { Component, OnInit } from '@angular/core';

//3th part library
import { GalleryService } from 'ng-gallery';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {

  constructor(
    private gallery: GalleryService
  ) { }

  private images;

  ngOnInit() {
    this.images = [
      {
        src: 'assets/images/kawalerka/1.jpg',
        thumbnail: 'assets/images/kawalerka/1.jpg'
      },
      {
        src: 'assets/images/kawalerka/2.jpg',
        thumbnail: 'assets/images/kawalerka/2.jpg'
      },
      {
        src: 'assets/images/kawalerka/3.jpg',
        thumbnail: 'assets/images/kawalerka/3.jpg'
      }
    ];

    this.gallery.load(this.images);
  }

}
