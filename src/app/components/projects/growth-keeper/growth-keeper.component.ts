import { Component, OnInit } from '@angular/core';
import { WeerdenProject } from '../project.component';

@Component({
  selector: 'app-growth-keeper',
  templateUrl: './growth-keeper.component.html',
  styleUrls: ['./growth-keeper.component.scss']
})
export class GrowthKeeperComponent implements OnInit {
  growthKeeperProject: WeerdenProject = {
    title: 'Growth keeper',
    techStack: ['Angular', 'MongoDB', 'Express', 'NodeJS', 'TypeScript'],
    description: `Growth keeper was a side project I did in the winter of 2017 when the crypto market hype
                was at it's peak. It's goal was to track and give scores to tokens that moved up in the coinmarketcap
                ranking. Though it's not fully operational and up to date anymore, it's still a project I very much enjoyed
                doing. 😄`,
    url: 'https://growth-keeper.herokuapp.com/'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
