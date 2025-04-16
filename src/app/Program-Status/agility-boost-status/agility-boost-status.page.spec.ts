import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgilityBoostStatusPage } from './agility-boost-status.page';

describe('AgilityBoostStatusPage', () => {
  let component: AgilityBoostStatusPage;
  let fixture: ComponentFixture<AgilityBoostStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilityBoostStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
