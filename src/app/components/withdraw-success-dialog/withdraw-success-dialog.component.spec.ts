import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawSuccessDialogComponent } from './withdraw-success-dialog.component';

describe('CardAuthSuccessDialogComponent', () => {
  let component: WithdrawSuccessDialogComponent;
  let fixture: ComponentFixture<WithdrawSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawSuccessDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
