import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthKeeperComponent } from './growth-keeper.component';

describe('GrowthKeeperComponent', () => {
  let component: GrowthKeeperComponent;
  let fixture: ComponentFixture<GrowthKeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthKeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthKeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
