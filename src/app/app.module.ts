import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/projects/project.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RabobankComponent } from './components/projects/rabobank/rabobank.component';
import { VattenfallComponent } from './components/projects/vattenfall/vattenfall.component';
import { GrowthKeeperComponent } from './components/projects/growth-keeper/growth-keeper.component';
import { TippiqComponent } from './components/projects/tippiq/tippiq.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackButtonDirective } from './directives/back-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    BlogComponent,
    HomeComponent,
    RabobankComponent,
    VattenfallComponent,
    GrowthKeeperComponent,
    TippiqComponent,
    HeaderComponent,
    FooterComponent,
    BackButtonDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
