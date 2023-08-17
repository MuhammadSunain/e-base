import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mb-button',
  templateUrl: './mb-button.component.html',
  styleUrls: ['./mb-button.component.css']
})
export class MbButtonComponent implements OnInit {

  @Input() txt: any;
  @Input() type: any = 2;
  @Input() iconClass: any;
  @Input() iconShow: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
