import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabobankComponent } from './rabobank.component';

describe('RabobankComponent', () => {
  let component: RabobankComponent;
  let fixture: ComponentFixture<RabobankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabobankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabobankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
