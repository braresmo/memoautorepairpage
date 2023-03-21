/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfoPageService } from './info-page.service';

describe('Service: InfoPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoPageService]
    });
  });

  it('should ...', inject([InfoPageService], (service: InfoPageService) => {
    expect(service).toBeTruthy();
  }));
});
