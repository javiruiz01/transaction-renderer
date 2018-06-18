import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  transactionOptions: Object[];
  currencyOptions: Object[];

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
  }
}
