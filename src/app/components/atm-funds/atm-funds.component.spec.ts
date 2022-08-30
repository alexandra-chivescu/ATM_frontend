import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmFundsComponent } from './atm-funds.component';

describe('AtmFundsComponent', () => {
  let component: AtmFundsComponent;
  let fixture: ComponentFixture<AtmFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmFundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
