import { RouterModule, Routes }     from '@angular/router';

// Components
import { StartComponent }           from './pages/start/start.component';
import { MenuComponent }            from './pages/menu/menu.component';
import { ContentComponent }         from './pages/content/content.component';

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
  }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);