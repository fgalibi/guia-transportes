import { SharedModule } from './../../shared/shared.module';
import { ItinerarioComponent } from './components/itinerario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItinerarioRoutingModule } from './itinerario-routing.module';


@NgModule({
  declarations: [ItinerarioComponent],
  imports: [
    CommonModule,
    ItinerarioRoutingModule,
    SharedModule
  ]
})
export class ItinerarioModule { }
