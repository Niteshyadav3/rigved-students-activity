import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStoreComponent } from './activity-store.component';

describe('ActivityStoreComponent', () => {
  let component: ActivityStoreComponent;
  let fixture: ComponentFixture<ActivityStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
