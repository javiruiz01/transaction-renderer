import { inject, TestBed } from '@angular/core/testing';
import { TransactionService } from './transaction-service.service';


describe('TransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionService]
    });
  });

  it('should be created', inject([TransactionService], (service: TransactionService) => {
    expect(service).toBeTruthy();
  }));
});
