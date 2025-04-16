import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramListingPage } from './program-listing.page';

describe('ProgramListingPage', () => {
  let component: ProgramListingPage;
  let fixture: ComponentFixture<ProgramListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
