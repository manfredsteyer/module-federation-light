import { async, TestBed } from '@angular/core/testing';
import { FlightLibModule } from './flight-lib.module';

describe('FlightLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FlightLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FlightLibModule).toBeDefined();
  });
});
