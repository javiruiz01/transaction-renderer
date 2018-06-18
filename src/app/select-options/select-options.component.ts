import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.css']
})
export class SelectOptionsComponent implements OnInit {

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
    ]
  }

  ngOnInit() {
  }

}
