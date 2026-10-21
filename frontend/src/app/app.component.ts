import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        const title = this.getTitle(this.router.routerState.root).join(' | ');
        this.titleService.setTitle(title);
      });
  }

  private getTitle(route: ActivatedRoute): string[] {
    const titles: string[] = [];
    let current: ActivatedRoute | null = route;

    while (current) {
      const title = current.snapshot.data['title'] as string | undefined;
      if (title) {
        titles.push(title);
      }
      current = current.firstChild;
    }

    return titles;
  }
}
