import { TestBed } from '@angular/core/testing';

import { chirpService } from './chirp.service';

describe('chirpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: chirpService = TestBed.get(chirpService);
    expect(service).toBeTruthy();
  });
});
