import { Component, OnInit, Input } from '@angular/core';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  @Input() inputImages;
  images;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit() {

    this.galleryOptions = [
      {
        imageSize: "contain",
        width: '100vw',
        height: '100vh',
        imageAnimation: NgxGalleryAnimation.Slide,
        // preview: false,
        thumbnails: false
      }
    ];

    let newGalleryImages = [];
    let newImages = [];

    for (let image of this.inputImages) {
      let galleryImage = new NgxGalleryImage( {
        small: image,
        medium: image,
        big: image
      });

      let newImage = {
        src: image,
        thumbnail: image
      }

      newGalleryImages.push(galleryImage);
      newImages.push(newImage);
    }
    this.galleryImages = newGalleryImages;
    this.images=newImages;
  }
}
