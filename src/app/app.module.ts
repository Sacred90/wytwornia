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
import { ContactModule }                from './pages/contact/contact.module'

/* Shared */
import { SharedModule }                 from './shared/shared.module';

// 3th part library
import { AgmCoreModule } from '@agm/core';
import 'hammerjs';
import { ArtComponent } from './pages/art/art.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtComponent
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
    ContactModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD3X-xXCl9VHI77wRwfwHkRXsH8kzCECJU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
