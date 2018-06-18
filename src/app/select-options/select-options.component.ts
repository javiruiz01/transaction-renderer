import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Option } from "../option";

@Component({
  selector: "select-options",
  templateUrl: "./select-options.component.html",
  styleUrls: ["./select-options.component.css"]
})
export class SelectOptionsComponent {
  @Input() options: Object[];
  @Input() placeholder: string;

  @Output() selected: EventEmitter<string>;

  showContent: boolean;
  selectedOption: string; 

  constructor() {
    this.placeholder = "";
    this.showContent = false;
    this.selected = new EventEmitter<string>();
  }

  handleClick(event) {
    this.showContent = !this.showContent;
  }

  handleSelection(option: Option) {
    this.showContent = !this.showContent;
    this.selectedOption = option.viewValue;
    this.selected.emit(option.value);
  }
}
