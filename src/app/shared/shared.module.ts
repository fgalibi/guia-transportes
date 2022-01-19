import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [FilterPipe, AlertModalComponent],
  imports: [CommonModule, NgxPaginationModule],
  exports: [FilterPipe, NgxPaginationModule, AlertModalComponent],
  entryComponents: [AlertModalComponent],
})
export class SharedModule {}
