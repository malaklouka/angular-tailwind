import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRates } from './exchange-rates.component';

describe('ExchangeRatesComponent', () => {
  let component: ExchangeRates;
  let fixture: ComponentFixture<ExchangeRates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRates ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
