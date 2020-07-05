import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface WeerdenProject {
  title: string;
  techStack?: string[];
  description: string;
  impressions?: {
    imageUrl: string;
    alt: string;
  }[];
  impressionVideo?: string;
  url?: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: WeerdenProject;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  close(reason: string): void {
    this.activeModal.close(reason);
  }

}
