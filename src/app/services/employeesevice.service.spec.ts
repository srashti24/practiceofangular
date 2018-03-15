import { TestBed, inject } from '@angular/core/testing';

import { EmployeeseviceService } from './employeesevice.service';

describe('EmployeeseviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeseviceService]
    });
  });

  it('should be created', inject([EmployeeseviceService], (service: EmployeeseviceService) => {
    expect(service).toBeTruthy();
  }));
});
