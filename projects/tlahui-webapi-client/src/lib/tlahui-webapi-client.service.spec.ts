import { TestBed, inject } from '@angular/core/testing';

import { TlahuiWebApiClientService } from './tlahui-webapi-client.service';

describe('TlahuiWebApiClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TlahuiWebApiClientService]
    });
  });

  it('should be created', inject([TlahuiWebApiClientService], (service: TlahuiWebApiClientService) => {
    expect(service).toBeTruthy();
  }));
});
