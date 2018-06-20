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
  @Input() text: string;

  @Output() queryTransactions: EventEmitter<Transaction[]>;

  loading: boolean;
  error: string;

  constructor(private _transactions: TransactionService) {
    this.queryTransactions = new EventEmitter<Transaction[]>();
    this.loading = false;
    this.error = "#8ec03f";
  }

  search(): void {
    this.toggleLoading();
    if (!this.currency && !this.action) {
      this._transactions.fetchAll().subscribe(
        res => {
          this.error = "#8ec03f";
          this.toggleLoading();
          this.queryTransactions.emit(res);
        },
        error => {
          this.error = "#F44336";
          this.toggleLoading();
          console.error("Oh no! un error", error);
        }
      );
    } else {
      this._transactions.fetchOptions(this.action, this.currency).subscribe(
        res => {
          this.error = "#8ec03f";
          this.toggleLoading();
          this.queryTransactions.emit(res);
        },
        error => {
          this.error = "#F44336";
          this.toggleLoading();
          console.error("Oh no! un error", error);
        }
      );
    }
  }

  toggleLoading(): void {
    this.loading = !this.loading;
  }

  ngOnInit() {}
}
