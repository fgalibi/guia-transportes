import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { OnibusComponent } from './../../transportes/onibus/components/onibus.component';
import { OnibusRoutingModule } from './onibus-routing.module';


@NgModule({
  declarations: [
    OnibusComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    OnibusRoutingModule,
    SharedModule
  ],
  exports: [OnibusComponent]
})
export class OnibusModule { }
