import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { ContentComponent }   from './content.component';
import { SharedModule }     from "../../shared/shared.module"
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [ ContentComponent ]
})
export class ContentModule { }
