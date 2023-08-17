import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mb-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() data: any[] = [];

  @Input() colDefs: any[] = [];

  height: any;

  headheight: any;

  rowHeight: number = 28;

  @Input() defaultHeight: any;
  
  @Input() rowSelection : any = 'multiple';

  @Input() pagination : any = true;

  constructor() { }

  ngOnInit() {
    this.height = this.defaultHeight + 'px';
  }

  

}
