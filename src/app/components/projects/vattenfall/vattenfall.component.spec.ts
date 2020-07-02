import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { VattenfallComponent } from './vattenfall.component';

describe('VattenfallComponent', () => {
  let component: VattenfallComponent;
  let fixture: ComponentFixture<VattenfallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VattenfallComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VattenfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
