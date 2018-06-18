import { Component, Input, OnInit, Output } from "@angular/core";
import { EventEmitter } from "events";
import { Option } from "../option";

@Component({
  selector: "select-options",
  templateUrl: "./select-options.component.html",
  styleUrls: ["./select-options.component.css"]
})
export class SelectOptionsComponent implements OnInit {
  @Input() options: Object[];
  @Input() placeholder: string;

  @Output() currency: EventEmitter;

  showContent: boolean;
  selectedOption: string;

  constructor() {
    this.placeholder = "";
    this.showContent = false;
    this.currency = new EventEmitter();
  }

  handleClick(event) {
    this.showContent = !this.showContent;
  }

  handleSelection(option: Option) {
    this.showContent = !this.showContent;
    this.selectedOption = option.viewValue;
  }

  ngOnInit() {
  }
}
