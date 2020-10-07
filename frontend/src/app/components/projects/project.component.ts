import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface WeerdenProject {
  name: string;
  title: string;
  featured: boolean;
  techStack?: string[];
  summary: string;
  description: string;
  featuredImage: string;
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
