import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component'
import { SharedModule }     from "../../shared/shared.module"

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ ProjectListComponent ]
})
export class ProjectListModule { }
