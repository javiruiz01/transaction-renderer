import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from "../transaction-service.service";
import { Transaction } from '../transaction';

@Component({
  selector: 'transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent implements OnInit {

  response: Transaction[];

  constructor(private _transactions: TransactionServiceService) { }

  ngOnInit() {
    this.fetchAllTransactions();
  }

  fetchAllTransactions() {
    return this._transactions.fetchAll().subscribe(res => this.response = res);
  }

}
