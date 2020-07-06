import { Component, OnInit } from '@angular/core';
import { WeerdenProject } from '../project.component';

@Component({
  selector: 'app-vattenfall',
  templateUrl: './vattenfall.component.html',
  styleUrls: ['./vattenfall.component.scss']
})
export class VattenfallComponent implements OnInit {
  vattenfallProject: WeerdenProject = {
    title: 'Vattenfall',
    techStack: ['TypeScript', 'Angular', 'nx', 'redux', 'RxJS', 'cypress', 'jest', 'Monorepo', 'AngularJS'],
    description: `At Vattenfall I've worked on the redesign from Nuon to Vattenfall. The redesign contained rebuilding
                the whole Mijn Vattenfall application from AngularJS to Angular and changing the look and feel from the
                old Nuon style to that of Vattenfall.
                I've contributed to an internal component library with generic components that could be used across the
                company for multiple applications.`,
    impressions: [
      {
        imageUrl: './assets/images/projects/vattenfall/mijn-vattenfall-home.png',
        alt: 'Mijn Vattenfall - Home'
      },
      {
        imageUrl: './assets/images/projects/vattenfall/mijn-vattenfall-login.png',
        alt: 'Mijn Vattenfall - Login'
      },
      {
        imageUrl: './assets/images/projects/vattenfall/mijn-vattenfall-password-forgotten.png',
        alt: 'Mijn Vattenfall - Password forgotten'
      }
    ],
    // url: 'https://www.vattenfall.nl/service/mijn-vattenfall'
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
