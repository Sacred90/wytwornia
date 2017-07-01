import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { MenuComponent }    from './menu.component';
import { SharedModule }     from "../../shared/shared.module"


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ MenuComponent ]
})
export class StartModule { }
