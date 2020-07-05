import { Component, OnInit } from '@angular/core';
import { WeerdenProject } from '../project.component';

@Component({
  selector: 'app-tippiq',
  templateUrl: './tippiq.component.html',
  styleUrls: ['./tippiq.component.scss']
})
export class TippiqComponent implements OnInit {
  tippiqProject: WeerdenProject = {
    title: 'Tippiq',
    techStack: ['AngularJS', 'NodeJS', 'Express', 'PostgreSQL'],
    description: `At the Tippiq website you could see what was going on in your neighbourhood.
                The job was fullstack though I mainly worked on the frontend of the webapp. The frameworks used on the
                frontend were AngularJS in combination with Bootstrap. On the backend it was NodeJS with ExpressJS and
                the database ran on PostgreSQL.`
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
