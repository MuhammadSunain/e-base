import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxModule } from '../text-box/text-box.module';
import { MbButtonModule } from '../mb-button/mb-button.module';
import { GridModule } from '../grid/grid.module';
import { MbDropdownModule } from '../mb-dropdown/mb-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    TextBoxModule,
    MbButtonModule,
    MbDropdownModule
  ],
  declarations: [
  ],
  exports: [
    TextBoxModule,
    MbButtonModule,
    GridModule,
    MbDropdownModule
  ]
})
export class RegistrationModule { }
