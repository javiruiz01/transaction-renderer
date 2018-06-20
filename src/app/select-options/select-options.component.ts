import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { Option } from "../option";

@Component({
  selector: "select-options",
  templateUrl: "./select-options.component.html",
  styleUrls: ["./select-options.component.css"]
})
export class SelectOptionsComponent {
  @Input() options: Option[];
  @Input() placeholder: string;

  @Output() selected: EventEmitter<string>;

  @HostListener('document:click', ['$event']) clickOut(event) {
    if (!this._ref.nativeElement.contains(event.target)) { this.showContent = false; }
  }

  showContent: boolean;
  selectedOption: string; 

  constructor(private _ref: ElementRef) {
    this.placeholder = "";
    this.showContent = false;
    this.selected = new EventEmitter<string>();
  }

  handleClick(event): void {
    this.showContent = !this.showContent;
  }

  handleSelection(option: Option): void {
    this.showContent = !this.showContent;
    this.selectedOption = option.viewValue;
    this.selected.emit(option.value);
  }
}
