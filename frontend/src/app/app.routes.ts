import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const title = 'Weerden.io';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { title } },
  { path: '**', redirectTo: '/' }
];
