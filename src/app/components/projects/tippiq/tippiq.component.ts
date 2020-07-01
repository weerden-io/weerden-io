import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tippiq',
  templateUrl: './tippiq.component.html',
  styleUrls: ['./tippiq.component.scss']
})
export class TippiqComponent implements OnInit {
  techStack = ['AngularJS', 'NodeJS', 'PostgreSQL'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
