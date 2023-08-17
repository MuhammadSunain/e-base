import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mb-dropdown',
  templateUrl: './mb-dropdown.component.html',
  styleUrls: ['./mb-dropdown.component.css']
})
export class MbDropdownComponent implements OnInit {

  @Input() paraname :any ;
  @Input() arrdata : any [] = [];


  constructor() { }

  ngOnInit() {
  }

}
