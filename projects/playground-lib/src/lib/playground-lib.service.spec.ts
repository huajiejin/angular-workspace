import { TestBed } from '@angular/core/testing';

import { PlaygroundLibService } from './playground-lib.service';

describe('PlaygroundLibService', () => {
  let service: PlaygroundLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaygroundLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
