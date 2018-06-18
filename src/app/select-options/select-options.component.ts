import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "select-options",
  templateUrl: "./select-options.component.html",
  styleUrls: ["./select-options.component.css"]
})
export class SelectOptionsComponent implements OnInit {
  @Input() options: Object[];
  @Input() placeholder: string;

  showContent: boolean;

  constructor() {
    this.placeholder = "";
    this.showContent = false;
  }

  handleClick(event) {
    this.showContent = !this.showContent;
  }

  handleSelection(option: Object) {
    console.log(option)
  }

  ngOnInit() {
  }
}
