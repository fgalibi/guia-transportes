import { NgModule } from '@angular/core';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [FilterPipe, ErrorDialogComponent],
  exports: [FilterPipe],
})
export class SharedModule {}
