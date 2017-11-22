import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { Project1Component }  from './project1/project1.component'
import { Project2Component }  from './project2/project2.component'
import { Project3Component }  from './project3/project3.component'
import { SharedModule }       from "../../shared/shared.module";
import { Project4Component } from './project4/project4.component';
import { Project5Component } from './project5/project5.component';
import { Project6Component } from './project6/project6.component';
import { Project7Component } from './project7/project7.component';
import { Project8Component } from './project8/project8.component';
import { Project9Component } from './project9/project9.component';
import { Project10Component } from './project10/project10.component';
import { Project11Component } from './project11/project11.component';
import { Project12Component } from './project12/project12.component';
import { Project13Component } from './project13/project13.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule  
  ],
  declarations: [
      Project1Component,
      Project2Component,
      Project3Component,
      Project4Component,
      Project5Component,
      Project6Component,
      Project7Component,
      Project8Component,
      Project9Component,
      Project10Component,
      Project11Component,
      Project12Component,
      Project13Component
    ]
})
export class ProjectModule { }
