import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectComponent } from './project.component';
import { WeerdenProject } from './project.model';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let activeModal: NgbActiveModal;

  const fakeProject: WeerdenProject = {
    name: 'fakeProject',
    title: 'fake project',
    featured: false,
    techStack: [],
    summary: 'im super duper fake',
    description: 'even more fakeness here',
    featuredImage: 'yes',
    impressionVideo: 'https://www.youtube.com/embed/fake'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectComponent],
      providers: [NgbActiveModal]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    activeModal = TestBed.inject(NgbActiveModal);
    fixture.componentInstance.project = fakeProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sanitizes the impression video url', () => {
    expect(component.impressionVideoUrl).toBeTruthy();
  });

  it('can close the active modal', () => {
    vi.spyOn(activeModal, 'close');
    component.close('order-66');

    expect(activeModal.close).toHaveBeenCalledTimes(1);
    expect(activeModal.close).toHaveBeenCalledWith('order-66');
  });
});
