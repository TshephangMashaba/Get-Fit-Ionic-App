import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoveryFlowPage } from './recovery-flow.page';

describe('RecoveryFlowPage', () => {
  let component: RecoveryFlowPage;
  let fixture: ComponentFixture<RecoveryFlowPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryFlowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
