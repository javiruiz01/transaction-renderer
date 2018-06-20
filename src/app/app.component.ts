import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from "./transaction-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  transactionOptions: Object[];
  currencyOptions: Object[];

  action: string;
  currency: string;

  transactions: Transaction[];

  constructor(private _transactions: TransactionService) {
    this.transactionOptions = [
      { value: 'payment', viewValue: 'Payment' },
      { value: 'credit', viewValue: 'Credit'}
    ];
    this.currencyOptions = [
      { value: 'USD', viewValue: 'USD' },
      { value: 'EUR', viewValue: 'EUR' },
      { value: 'GBP', viewValue: 'GBP' }
    ];

    this.currency = '';
    this.action = '';
  }

  ngOnInit() {
    this.fetchAllTransactions();
  }

  fetchAllTransactions(): void {
    this._transactions.fetchAll().subscribe(res => {
      this.transactions = res;
      console.log(this.transactions)
    });
  }

  selectedAction(event: string): void {
    this.action = event;
  }

  selectedCururency(event: string): void {
    this.currency = event;
  }

  handleSearch(event: Transaction[]): void {
    this.transactions = event;
  }
}
