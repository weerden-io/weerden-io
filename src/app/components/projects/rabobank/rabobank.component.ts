import { Component, OnInit } from '@angular/core';
import { WeerdenProject } from '../project.component';

@Component({
  selector: 'app-rabobank',
  templateUrl: './rabobank.component.html',
  styleUrls: ['./rabobank.component.scss']
})
export class RabobankComponent implements OnInit {
  rabobankProject: WeerdenProject = {
    techStack: ['TypeScript', 'Angular', 'NodeJS', 'MongoDB', 'ramda', 'd3', 'Monorepo', 'AngularJS'],
    title: 'Rabobank',
    description: `At the Rabobank I've worked on the investment module/sub-application within the mobile
                banking application. At first the investment application was a seperate hybrid app in the app store.
                This was later merged into the general mobile banking app and while merging the application almost all
                features were rebuilt.`,
    impressionVideo: 'https://www.youtube.com/embed/5lCqExOBUXg'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
