import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';

import { AppComponent }                 from './app.component';
import { AppRoutingModule }             from './app.routing.module';

/* Pages */
import { StartModule }                  from './pages/start/start.module';
import { MenuModule }                   from './pages/menu/menu.module';
import { ContentModule }                from './pages/content/content.module';
import { ProjectListModule }            from './pages/projectsList/project-list.module';

/* Shared */
import { SharedModule }                 from './shared/shared.module';

// 3th part library
import {NgbModule}                  from '@ng-bootstrap/ng-bootstrap';

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
    ProjectListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
