import { Component, Input, OnInit } from "@angular/core";
import { TransactionService } from "../transaction-service.service";

@Component({
  selector: "search-button",
  templateUrl: "./search-button.component.html",
  styleUrls: ["./search-button.component.css"]
})
export class SearchButtonComponent implements OnInit {
  @Input() currency: string;
  @Input() action: string;

  constructor(private _transactions: TransactionService) {
    this.currency = "";
    this.action = "";
  }

  search() {}

  ngOnInit() {}
}
