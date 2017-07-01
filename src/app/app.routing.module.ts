import { RouterModule, Routes }     from '@angular/router';

// Components
import { StartComponent }           from './pages/start/start.component';
import { MenuComponent }           from './pages/menu/menu.component';

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
  }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);