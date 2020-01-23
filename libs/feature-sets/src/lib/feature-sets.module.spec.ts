import { async, TestBed } from '@angular/core/testing';
import { FeatureSetsModule } from './feature-sets.module';

describe('FeatureSetsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureSetsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureSetsModule).toBeDefined();
  });
});
