import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { dependencies, HomeComponent } from './home.component';
import * as rxjs from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { WeerdenProject } from '../projects/project.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let route: ActivatedRoute;
  let router: Router;
  let modalService: NgbModal;
  let fixture: ComponentFixture<HomeComponent>;
  const fakeProject: WeerdenProject = {
    name: 'fakeProject',
    title: 'fake project',
    featured: true,
    techStack: [],
    summary: 'im super duper fake',
    description: 'even more fakeness here',
    featuredImage: 'yes',
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, CommonModule],
      declarations: [HomeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    route = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();

    dependencies.GitHubCalendar = rxjs.noop;
    route.queryParams = rxjs.of({});
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should initialize the home component', () => {
      component.projects = [fakeProject];

      spyOn(component, 'getRSSFeed');
      spyOn(component, 'initGithubCalendar');
      spyOn(component, 'resetLevelBar');

      component.ngOnInit();

      expect(component.getRSSFeed).toHaveBeenCalledTimes(1);
      expect(component.initGithubCalendar).toHaveBeenCalledTimes(1);
      expect(component.resetLevelBar).toHaveBeenCalledTimes(1);
      expect(component.featuredProject).toEqual(fakeProject);
    });
  });

  it('ngAfterViewInit()', () => {
    spyOn(component, 'animateLevelBar');
    component.ngAfterViewInit();

    expect(component.animateLevelBar).toHaveBeenCalledTimes(1);
  });

  it('initGithubCalendar()', () => {
    spyOn(dependencies, 'GitHubCalendar');
    component.initGithubCalendar();
    expect(dependencies.GitHubCalendar).toHaveBeenCalledTimes(1);
    expect(dependencies.GitHubCalendar).toHaveBeenCalledWith('#github-graph', 'jimenezweerden', {responsive: true});
  });

  describe('openProjectDialog()', () => {
    beforeEach(() => spyOn(modalService, 'open').and.callThrough());

    it('opens the dialog with the given project', () => {
      component.openProjectDialog(fakeProject);

      expect(component.modalRef).toBeDefined();
      expect(component.modalRef.componentInstance.project).toEqual(fakeProject);
    });
  });

  it('removeQueryParams()', () => {
    component.openProjectDialog(fakeProject);

    spyOn(component.modalRef, 'close');
    spyOn(router, 'navigate');
    component.removeQueryParams();
    expect(component.modalRef.close).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledWith(['.'], {relativeTo: route});
  });
});
