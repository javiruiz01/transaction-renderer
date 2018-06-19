import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from "../transaction-service.service";

@Component({
  selector: 'transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent implements OnInit {
  
  @Input() transactions: Transaction[];
  tableHead: string[];

  show: boolean;
  cardBrands: Object;
  selected: string;
  
  constructor(private _transactions: TransactionService) {
    this.tableHead = ['Name', 'Brand', 'Last 4 digits', 'Transaction type', 'Amount', 'Currency'];
    this.cardBrands = {
      1060: 'Diners Club',
      1020: 'MasterCard',
      1010: 'VISA'
    };
    this.show = false;
  }
  
  ngOnInit() {
    this.fetchAllTransactions();
  }

  fetchAllTransactions() {
    return this._transactions.fetchAll().subscribe(res => {
      this.transactions = res;
    });
  }

  showCollapsible(href) {
    if (this.selected === href && this.show) {
      this.show = false;
    } else {
      this.selected = href;
      this.show = true;
    }
  }
  
}
