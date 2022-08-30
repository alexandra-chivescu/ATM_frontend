import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAuthSuccessDialogComponent } from './card-auth-success-dialog.component';

describe('CardAuthSuccessDialogComponent', () => {
  let component: CardAuthSuccessDialogComponent;
  let fixture: ComponentFixture<CardAuthSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAuthSuccessDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAuthSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
