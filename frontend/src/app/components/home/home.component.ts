import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as GitHubCalendar from 'github-calendar';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, take, takeUntil } from 'rxjs/operators';
import { from, Subject } from 'rxjs';
import { ProjectComponent, WeerdenProject } from '../projects/project.component';
import { projects } from './projects';
import { ApiService } from '../../services/api.service';
import * as Parser from 'rss-parser';

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
  rssFeed: Parser.Output;
  featuredProject: WeerdenProject;

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private router: Router, private apiService: ApiService) {
    route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        const project = this.projects.find(prjct => prjct.name === params.project);
        project
          ? this.openProjectDialog(project)
          : this.removeQueryParams();
      });
  }

  ngOnInit(): void {
    this.getRSSFeed();
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
    dependencies.GitHubCalendar('#github-graph', 'jimenezweerden', {responsive: true});
  }

  getRSSFeed(): void {
    this.apiService.getRSSFeed()
      .pipe(
        take(1),
        map(rssFeed => ({...rssFeed, items: rssFeed.items.slice(0, 3)} as Parser.Output))
      )
      .subscribe({
        next: (rssFeed: Parser.Output) => this.rssFeed = rssFeed,
        error: console.error
      });
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
