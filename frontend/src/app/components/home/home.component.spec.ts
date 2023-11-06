import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import * as rxjs from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { WeerdenProject } from '../projects/project.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

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
      declarations: [HomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    route = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();

    route.queryParams = rxjs.of({});
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has the following public properties', () => {
    expect(component.projects).toBeDefined();
    expect(component.rssFeed$).toBeDefined();
  });

  describe('ngOnInit()', () => {
    it('should initialize the home component', () => {
      component.projects = [fakeProject];

      component.ngOnInit();
      expect(component.featuredProject).toEqual(fakeProject);
    });
  });
});
