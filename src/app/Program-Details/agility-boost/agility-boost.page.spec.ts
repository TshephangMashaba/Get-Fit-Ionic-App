import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgilityBoostPage } from './agility-boost.page';

describe('AgilityBoostPage', () => {
  let component: AgilityBoostPage;
  let fixture: ComponentFixture<AgilityBoostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilityBoostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
