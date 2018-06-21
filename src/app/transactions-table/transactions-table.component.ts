import { Component, Input } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent {
  
  @Input() transactions: Transaction[];

  tableHead: string[];
  show: boolean;
  cardBrands: Object;
  selected: string;
  
  constructor() {
    this.tableHead = ['Name', 'Brand', 'Last 4 digits', 'Transaction type', 'Amount', 'Currency'];
    this.cardBrands = {
      1060: 'Diners Club',
      1020: 'MasterCard',
      1010: 'VISA'
    };
    this.show = false;
  }

  showCollapsible(id: string): void {
    if (this.selected === id && this.show) {
      this.show = false;
    } else {
      this.selected = id;
      this.show = true;
    }
  }
}
