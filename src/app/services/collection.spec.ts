import { TestBed } from '@angular/core/testing';
import { CollectionService } from './collection.service';

describe('CollectionService', () => {
  let service: CollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionService);
  });

  it('doit être créé', () => {
    expect(service).toBeTruthy();
  });
});
