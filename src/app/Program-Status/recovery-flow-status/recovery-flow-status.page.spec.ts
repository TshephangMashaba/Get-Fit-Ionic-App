import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoveryFlowStatusPage } from './recovery-flow-status.page';

describe('RecoveryFlowStatusPage', () => {
  let component: RecoveryFlowStatusPage;
  let fixture: ComponentFixture<RecoveryFlowStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryFlowStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
