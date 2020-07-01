import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vattenfall',
  templateUrl: './vattenfall.component.html',
  styleUrls: ['./vattenfall.component.scss']
})
export class VattenfallComponent implements OnInit {
  techStack = ['TypeScript', 'Angular', 'nx', 'redux', 'RxJS', 'cypress', 'jest', 'Monorepo', 'AngularJS'];

  constructor() { }

  ngOnInit(): void {
  }

}
