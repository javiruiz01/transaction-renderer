import { Component } from '@angular/core';
import { Transaction } from './transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  transactionOptions: Object[];
  currencyOptions: Object[];

  action: string;
  currency: string;

  queryResults: Transaction[];

  constructor() {
    this.transactionOptions = [
      { value: 'payment', viewValue: 'Payment' },
      { value: 'authorize', viewValue: 'Authorize' },
      { value: 'credit', viewValue: 'Credit'}
    ];
    this.currencyOptions = [
      { value: 'usd', viewValue: 'USD' },
      { value: 'eur', viewValue: 'EUR' },
      { value: 'gbp', viewValue: 'GBP' }
    ];

    this.currency = '';
    this.action = '';
  }

  selectedAction(event: string): void {
    this.action = event;
  }

  selectedCururency(event: string): void {
    this.currency = event;
  }

  handleSearch(event: Transaction[]):void {
    console.log(event)
    this.queryResults = event;
  }
}
