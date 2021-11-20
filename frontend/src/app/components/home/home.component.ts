import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import * as GitHubCalendar from 'github-calendar';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, take, catchError } from 'rxjs/operators';
import { from, of, Subscription } from 'rxjs';
import { ProjectComponent } from '../projects/project.component';
import { WeerdenProject } from '../projects/project.model';
import { projects } from './projects';
import { ApiService } from '../../services/api.service';
import { RssFeedResponse } from '../../services/api.service.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  projects: WeerdenProject[] = projects;
  featuredProject: WeerdenProject;
  blogUrl = 'https://jimenezweerden.wordpress.com/';
  rssFeed$ = this.apiService.getRSSFeed()
    .pipe(
      map(rssFeed => ({...rssFeed, items: rssFeed.items.slice(0, 3)} as RssFeedResponse)),
      catchError(() => of('error'))
    );

  private subscriptions = new Subscription();
  private modalRef: NgbModalRef;

  constructor(private readonly modalService: NgbModal,
              private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly apiService: ApiService) {
  }

  ngOnInit(): void {
    this.initGithubCalendar();
    this.watchQueryParams();
    this.featuredProject = this.projects.find(project => project.featured);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initGithubCalendar(): void {
    GitHubCalendar('#github-graph', 'jimenezweerden', {responsive: true});
  }

  private watchQueryParams() {
    this.subscriptions.add(
      this.route.queryParams
        .subscribe((params: Params) => {
          const project = this.projects.find(prjct => prjct.name === params.project);
          project
            ? this.openProjectDialog(project)
            : this.removeQueryParams();
        })
    );
  }

  private openProjectDialog(project: WeerdenProject): void {
    this.modalRef = this.modalService.open(ProjectComponent);
    this.modalRef.componentInstance.project = project;

    const result$ = from(this.modalRef.result);
    result$
      .pipe(take(1))
      .subscribe()
      .add(() => this.removeQueryParams());
  }

  private removeQueryParams(): void {
    this.modalRef?.close();
    this.router.navigate(['.'], {relativeTo: this.route});
  }
}
