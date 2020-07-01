import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rabobank',
  templateUrl: './rabobank.component.html',
  styleUrls: ['./rabobank.component.scss']
})
export class RabobankComponent implements OnInit {
  techStack = ['TypeScript', 'Angular', 'NodeJS', 'MongoDB', 'ramda', 'redux', 'd3', 'Monorepo', 'AngularJS']

  constructor() {
  }

  ngOnInit(): void {
  }

}
