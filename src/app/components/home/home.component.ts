import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as GitHubCalendar from 'github-calendar';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { take, takeUntil } from 'rxjs/operators';
import { from, Subject } from 'rxjs';
import { ProjectComponent, WeerdenProject } from '../projects/project.component';
import { projects } from './projects';

require('jquery-rss');

// expose for testing
export const dependencies = {
  GitHubCalendar
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  modalRef: NgbModalRef;
  destroy$ = new Subject();
  projects: WeerdenProject[] = projects;
  featuredProject: WeerdenProject;

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {
    route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        const projectComponent = this.projects.find(project => project.name === params.project);
        projectComponent
          ? this.openProjectDialog(projectComponent)
          : this.removeQueryParams();
      });
  }

  ngOnInit(): void {
    this.loadRSSFeed();
    this.initGithubCalendar();
    this.resetLevelBar();
    this.featuredProject = this.projects.find(project => project.featured);
  }

  ngAfterViewInit(): void {
    this.animateLevelBar();
  }

  resetLevelBar(): void {
    $('.level-bar-inner').css('width', '0');
  }

  animateLevelBar(): void {
    $('.level-bar-inner').each(function() {
      const itemWidth = $(this).data('level');
      $(this).animate({
        width: itemWidth
      }, 800);
    });
  }

  initGithubCalendar(): void {
    dependencies.GitHubCalendar('#github-graph', 'jimenezweerden');
  }

  loadRSSFeed(): void {
    // @ts-ignore
    $('#rss-feeds').rss(
      'https://jimenezweerden.wordpress.com/feed/',
      {
        limit: 3,
        effect: 'slideFastSynced',
        ssl: true,
        layoutTemplate: '<div class=\'items\'>{entries}</div>',
        entryTemplate: `
        <div class='item'>
        <h3 class='title'>
        <a href='{url}' target='_blank'>{title}</a>
        </h3>
        <div>
        <p>{shortBodyPlain}...</p>
        <a class='more-link' href='{url}' target='_blank'>
        <i class='fas fa-external-link-alt'></i>Read more</a>
        </div>
        </div>
        `
      }
    );
  }

  openProjectDialog(project: WeerdenProject): void {
    this.modalRef = this.modalService.open(ProjectComponent);
    this.modalRef.componentInstance.project = project;

    const result$ = from(this.modalRef.result);
    result$
      .pipe(take(1))
      .subscribe(
        () => this.removeQueryParams(),
        () => this.removeQueryParams()
      );
  }

  removeQueryParams(): void {
    this.modalRef?.close();
    this.router.navigate(['.'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
