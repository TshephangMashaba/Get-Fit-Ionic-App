import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutProgressPagePage } from './workout-progress-page.page';

describe('WorkoutProgressPagePage', () => {
  let component: WorkoutProgressPagePage;
  let fixture: ComponentFixture<WorkoutProgressPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutProgressPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
