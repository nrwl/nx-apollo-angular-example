import { async, TestBed } from '@angular/core/testing';
import { DataAccessModule } from './data-access.module';

describe('DataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataAccessModule).toBeDefined();
  });
});
