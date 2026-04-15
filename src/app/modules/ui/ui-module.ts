import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonUi } from './button/button.ui';

@NgModule({
  declarations: [ButtonUi],
  exports: [ButtonUi],
  imports: [CommonModule],
})
export class UiModule {}
