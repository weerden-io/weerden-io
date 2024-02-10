import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  constructor(private readonly router: Router, private readonly titleService: Title) {
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.router.events
        .pipe(
          filter((event: Event) => event instanceof NavigationEnd),
          map(() => this.router),
        )
        .subscribe({
          next: () => {
            const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' | ');
            this.titleService.setTitle(title);
          }
        }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private getTitle(state, parent): any[] {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
