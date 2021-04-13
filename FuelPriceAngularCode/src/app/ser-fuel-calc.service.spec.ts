import { TestBed } from '@angular/core/testing';

import { SerFuelCalcService } from './ser-fuel-calc.service';

describe('SerFuelCalcService', () => {
  let service: SerFuelCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerFuelCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
