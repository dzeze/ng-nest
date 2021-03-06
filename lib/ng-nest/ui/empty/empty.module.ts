import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XEmptyComponent } from './empty.component';
import { XIconModule } from '@ng-nest/ui/icon';
import { XOutletModule } from '@ng-nest/ui/outlet';
import { XEmptyProperty } from './empty.property';

@NgModule({
  declarations: [XEmptyComponent, XEmptyProperty],
  exports: [XEmptyComponent],
  imports: [CommonModule, XOutletModule, XIconModule]
})
export class XEmptyModule {}
