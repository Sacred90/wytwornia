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
  }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);