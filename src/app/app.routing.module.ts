import { RouterModule, Routes }     from '@angular/router';

// Components
import { StartComponent }           from './pages/start/start.component';
import { MenuComponent }            from './pages/menu/menu.component';
import { ContentComponent }         from './pages/content/content.component';
import { ProjectListComponent }     from './pages/projectsList/project-list.component';
import { ContactComponent }         from './pages/contact/contact.component'
import { ArtComponent }             from './pages/art/art.component';

import { Project1Component }        from './pages/project/project1/project1.component';
import { Project2Component }        from './pages/project/project2/project2.component';
import { Project3Component }        from './pages/project/project3/project3.component';
import { Project4Component }        from './pages/project/project4/project4.component';
import { Project5Component }        from './pages/project/project5/project5.component';
import { Project6Component }        from './pages/project/project6/project6.component';
import { Project7Component }        from './pages/project/project7/project7.component';
import { Project8Component }        from './pages/project/project8/project8.component';
import { Project9Component }        from './pages/project/project9/project9.component';
import { Project10Component }        from './pages/project/project10/project10.component';
import { Project11Component }        from './pages/project/project11/project11.component';
import { Project12Component }        from './pages/project/project12/project12.component';
import { Project13Component }        from './pages/project/project13/project13.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
    data: { animation: '1' }
  },
  {
    path: 'start',
    component: StartComponent,
    data: { animation: '2' }
  },
  {
    path: 'menu',
    component: MenuComponent,
    data: { animation: '3' }
  },
  {
    path: 'content',
    component: ContentComponent,
    data: { animation: '4' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: '5'}
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    data: { animation: '6' }
  },
  {
    path: 'art',
    component: ArtComponent,
    data: { animation: '7' }
  },
  {
    path: 'project1',
    component: Project1Component,
    data: { animation: '8' }
  },
  {
    path: 'project2',
    component: Project2Component,
    data: { animation: '9' }
  },
  {
    path: 'project3',
    component: Project3Component,
    data: { animation: '10' }
  },
  {
    path: 'project4',
    component: Project4Component,
    data: { animation: '11' }
  },
  {
    path: 'project5',
    component: Project5Component,
    data: { animation: '12' }
  },
  {
    path: 'project6',
    component: Project6Component,
    data: { animation: '13' }
  },
  {
    path: 'project7',
    component: Project7Component,
    data: { animation: '14' }
  },
  {
    path: 'project8',
    component: Project8Component,
    data: { animation: '15' }
  },
  {
    path: 'project9',
    component: Project9Component,
    data: { animation: '16' }
  },
  {
    path: 'project10',
    component: Project10Component,
    data: { animation: '17' }
  },
  {
    path: 'project11',
    component: Project11Component,
    data: { animation: '18' }
  },
  {
    path: 'project12',
    component: Project12Component,
    data: { animation: '19' }
  },
  {
    path: 'project13',
    component: Project13Component,
    data: { animation: '20' }
  }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);