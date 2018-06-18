import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionServiceService } from "../transaction-service.service";

@Component({
  selector: 'transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent implements OnInit {
  
  transactions: Transaction[];
  tableHead: string[];
  
  constructor(private _transactions: TransactionServiceService) {
    this.tableHead = ['Name', 'Brand', 'Last 4 digits', 'Transaction type', 'Amount', 'Currency'];
  }
  
  ngOnInit() {
    this.fetchAllTransactions();
  }

  fetchAllTransactions() {
    return this._transactions.fetchAll().subscribe(res => {
      this.transactions = res;
    });
  }
  
}
