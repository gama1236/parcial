import { TestBed } from '@angular/core/testing';

import { ServicesAppService } from './services-app.service';

describe('ServicesAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesAppService = TestBed.get(ServicesAppService);
    expect(service).toBeTruthy();
  });
});
