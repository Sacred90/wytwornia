import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';

import { AppComponent }                 from './app.component';
import { AppRoutingModule }             from './app.routing.module';

/* Pages */
import { StartModule }                  from './pages/start/start.module';
import { MenuComponent }                from './pages/menu/menu.component';

/* Shared */
import { SharedModule }                 from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
