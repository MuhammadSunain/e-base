import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MbDropdownComponent } from './mb-dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MbDropdownComponent],
  exports : [MbDropdownComponent]
})
export class MbDropdownModule { }
