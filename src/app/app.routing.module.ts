import { RouterModule, Routes }     from '@angular/router';

// Components
import { StartComponent }           from './pages/start/start.component';
import { MenuComponent }            from './pages/menu/menu.component';
import { ContentComponent }         from './pages/content/content.component';
import { ProjectListComponent }     from './pages/projectsList/project-list.component';

import { Project1Component }        from './pages/project/project1/project1.component';
import { Project2Component }        from './pages/project/project2/project2.component';
import { Project3Component }        from './pages/project/project3/project3.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: 'project1',
    component: Project1Component
  },
  {
    path: 'project2',
    component: Project2Component
  },
  {
    path: 'project3',
    component: Project3Component
  }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);