import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RabobankComponent } from './components/projects/rabobank/rabobank.component';
import { VattenfallComponent } from './components/projects/vattenfall/vattenfall.component';
import { GrowthKeeperComponent } from './components/projects/growth-keeper/growth-keeper.component';
import { TippiqComponent } from './components/projects/tippiq/tippiq.component';

const title = 'Weerden.io';
const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', data: {title}},
  {
    path: 'projects',
    data: {title: `${title} | Projects`},
    children: [
      {path: 'vattenfall', component: VattenfallComponent, data: {title: 'Vattenfall'}},
      {path: 'rabobank', component: RabobankComponent, data: {title: 'Rabobank'}},
      {path: 'growth-keeper', component: GrowthKeeperComponent, data: {title: 'Growth keeper'}},
      {path: 'tippiq', component: TippiqComponent, data: {title: 'Tippiq'}},
    ]
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})
  ]
})
export class AppRoutingModule {
}
