import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityChildComponent } from './activity-child.component';

describe('ActivityChildComponent', () => {
  let component: ActivityChildComponent;
  let fixture: ComponentFixture<ActivityChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
