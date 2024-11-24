import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { VfvPromotionalVideoComponent } from './vfv-promotional-video/vfv-promotional-video.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'video',
    pathMatch: 'full'
  },
  {
    path: 'video',
    component: VfvPromotionalVideoComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  }
];
