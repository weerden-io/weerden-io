import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbActiveModal, NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

import { WeerdenProject } from './project.model';

@Component({
  selector: 'app-project',
  imports: [NgbCarousel, NgbSlide],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
  @Input() project?: WeerdenProject;

  private readonly activeModal = inject(NgbActiveModal);
  private readonly sanitizer = inject(DomSanitizer);

  get impressionVideoUrl(): SafeResourceUrl | undefined {
    const video = this.project?.impressionVideo;
    return video ? this.sanitizer.bypassSecurityTrustResourceUrl(video) : undefined;
  }

  close(reason: string): void {
    this.activeModal.close(reason);
  }
}
