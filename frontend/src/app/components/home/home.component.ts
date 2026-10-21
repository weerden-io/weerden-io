import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { from, of } from 'rxjs';
import { catchError, finalize, map, take } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';
import { ProjectComponent } from '../projects/project.component';
import { WeerdenProject } from '../projects/project.model';
import { projects } from './projects';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private readonly modalService = inject(NgbModal);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly apiService = inject(ApiService);
  private readonly destroyRef = inject(DestroyRef);

  readonly projects: WeerdenProject[] = projects;
  readonly featuredProject: WeerdenProject | undefined = projects.find(project => project.featured);
  readonly rssFeed$ = this.apiService.getRSSFeed()
    .pipe(
      map(rssFeed => ({ ...rssFeed, items: rssFeed.items.slice(0, 3) })),
      catchError(() => of('error'))
    );

  private modalRef: NgbModalRef | undefined;

  ngOnInit(): void {
    this.watchQueryParams();
  }

  private watchQueryParams(): void {
    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params: Params) => {
        const project = this.projects.find(prjct => prjct.name === params['project']);
        if (project) {
          this.openProjectDialog(project);
        } else {
          this.removeQueryParams();
        }
      });
  }

  private openProjectDialog(project: WeerdenProject): void {
    this.modalRef = this.modalService.open(ProjectComponent);
    this.modalRef.componentInstance.project = project;

    from(this.modalRef.result)
      .pipe(
        take(1),
        finalize(() => this.removeQueryParams())
      )
      .subscribe();
  }

  private removeQueryParams(): void {
    this.modalRef?.close();
    void this.router.navigate(['.'], { relativeTo: this.route });
  }
}
