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
        width: '700px',
        height: '500px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        preview: true
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
