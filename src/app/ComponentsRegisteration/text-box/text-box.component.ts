import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mb-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  constructor() { }

  @Input() caption : any;
  @Input() type : any = 1;
  @Input() showCaption : boolean = true;

  ngOnInit() {
  }

}
