import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MbButtonComponent } from './mb-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MbButtonComponent],
  exports: [MbButtonComponent]
})
export class MbButtonModule { }
