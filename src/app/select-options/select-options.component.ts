import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.css']
})
export class SelectOptionsComponent implements OnInit {

  @Input() options: Object[];
  @Input() placeholder: string;

  constructor() {
    this.placeholder = '';
  }

  ngOnInit() {
    console.log(this.options);
  }

}
