import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const title = 'Weerden.io';
const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', data: {title}},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })
  ]
})
export class AppRoutingModule {
}
