import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeastModeStatusPage } from './beast-mode-status.page';

describe('BeastModeStatusPage', () => {
  let component: BeastModeStatusPage;
  let fixture: ComponentFixture<BeastModeStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BeastModeStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
