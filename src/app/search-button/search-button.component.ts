import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Transaction } from "../transaction";
import { TransactionService } from "../transaction-service.service";

@Component({
  selector: "search-button",
  templateUrl: "./search-button.component.html",
  styleUrls: ["./search-button.component.css"]
})
export class SearchButtonComponent implements OnInit {
  @Input() currency: string;
  @Input() action: string;

  @Output() queryTransactions: EventEmitter<Transaction[]>;

  constructor(private _transactions: TransactionService) {
    this.queryTransactions = new EventEmitter<Transaction[]>();
  }

  search(): void {
    this._transactions.fetchOptions(this.action, this.currency).subscribe(res => {
      this.queryTransactions.emit(res);
    })
  }

  ngOnInit() {}
}
