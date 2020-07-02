import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { TippiqComponent } from './tippiq.component';

describe('TippiqComponent', () => {
  let component: TippiqComponent;
  let fixture: ComponentFixture<TippiqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TippiqComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TippiqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
