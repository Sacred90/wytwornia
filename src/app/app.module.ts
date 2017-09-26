import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';

import { AppComponent }                 from './app.component';
import { AppRoutingModule }             from './app.routing.module';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';

/* Pages */
import { StartModule }                  from './pages/start/start.module';
import { MenuModule }                   from './pages/menu/menu.module';
import { ContentModule }                from './pages/content/content.module';
import { ProjectListModule }            from './pages/projectsList/project-list.module';
import { ProjectModule }                from './pages/project/project.module';

/* Shared */
import { SharedModule }                 from './shared/shared.module';

// 3th part library

import { GalleryModule, GalleryConfig } from 'ng-gallery';

export const galleryConfig : GalleryConfig = {
  "style": {
    "background": "#121519",
    "width": "100%",
    "height":"100%",
    "padding": "1em"
  },
  "animation": "fade",
  "loader": {
    "width": "50px",
    "height": "50px",
    "position": "center",
    "icon": "oval"
  },
  "description": {
    "counter": true
  },
  "navigation": true,
  "bullets": {
    "position": "bottom"
  },
  "player": {
    "autoplay": false,
    "speed": 3000
  },
  "thumbnails": {
    "width": 120,
    "height": 90,
    "position": "bottom",
    "space": 20
  }
} 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ContentModule,
    MenuModule,
    ProjectListModule,
    ProjectModule,
    BrowserAnimationsModule,
    GalleryModule.forRoot(galleryConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
