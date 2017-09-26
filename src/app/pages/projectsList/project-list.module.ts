import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component'
import { SharedModule }     from "../../shared/shared.module"
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule 
  ],
  declarations: [ ProjectListComponent ]
})
export class ProjectListModule { }
