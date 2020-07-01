import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-growth-keeper',
  templateUrl: './growth-keeper.component.html',
  styleUrls: ['./growth-keeper.component.scss']
})
export class GrowthKeeperComponent implements OnInit {
  techStack = ['Angular', 'MongoDB', 'Express', 'NodeJS', 'TypeScript'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
