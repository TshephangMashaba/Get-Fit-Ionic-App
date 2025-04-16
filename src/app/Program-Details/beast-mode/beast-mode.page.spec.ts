import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeastModePage } from './beast-mode.page';

describe('BeastModePage', () => {
  let component: BeastModePage;
  let fixture: ComponentFixture<BeastModePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BeastModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
