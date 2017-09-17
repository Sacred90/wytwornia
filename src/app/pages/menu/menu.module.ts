import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { MenuComponent }    from './menu.component';
import { SharedModule }     from "../../shared/shared.module"

import { RouterModule }     from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [ MenuComponent ]
})
export class MenuModule { }
