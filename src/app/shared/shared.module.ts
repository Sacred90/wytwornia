import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HamburgerComponent } from './hamburger/hamburger.component';
import { GalleryComponent } from './gallery/gallery.component';

// 3th part library
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    NgxGalleryModule
  ],
  exports: [
    HamburgerComponent,
    GalleryComponent
  ],
  declarations: [
    HamburgerComponent,
    GalleryComponent
  ]
})
export class SharedModule { }
