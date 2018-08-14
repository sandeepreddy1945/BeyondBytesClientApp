import { TestBed, inject } from '@angular/core/testing';

import { LoginAppService } from './login-app.service';

describe('LoginAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAppService]
    });
  });

  it('should be created', inject([LoginAppService], (service: LoginAppService) => {
    expect(service).toBeTruthy();
  }));
});
