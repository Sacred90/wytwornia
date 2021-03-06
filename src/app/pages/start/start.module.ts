import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { StartComponent }   from './start.component';
import { SharedModule }     from "../../shared/shared.module"


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [StartComponent]
})
export class StartModule { }
