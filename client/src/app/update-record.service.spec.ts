import { TestBed, inject } from '@angular/core/testing';

import { UpdateRecordService } from './update-record.service';

describe('UpdateRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateRecordService]
    });
  });

  it('should be created', inject([UpdateRecordService], (service: UpdateRecordService) => {
    expect(service).toBeTruthy();
  }));
});
