import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { ContactComponent }   from './contact.component';
import { SharedModule }     from "../../shared/shared.module"
import { RouterModule } from '@angular/router';

// 3th part library
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AgmCoreModule
  ],
  declarations: [ ContactComponent ]
})
export class ContactModule { }
