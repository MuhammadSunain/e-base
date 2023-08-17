import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule,
  ],
  declarations: [GridComponent],
  exports: [GridComponent]
})
export class GridModule { }
