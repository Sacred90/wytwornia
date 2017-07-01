import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HamburgerComponent } from './hamburger/hamburger.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HamburgerComponent
  ],
  declarations: [
    HamburgerComponent
  ]
})
export class SharedModule { }
