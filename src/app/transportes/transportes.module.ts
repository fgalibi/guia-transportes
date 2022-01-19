import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItinerarioModule } from './itinerario/itinerario.module';
import { OnibusModule } from './onibus/onibus.module';
import { TransportesRoutingModule } from './transportes-routing.module';
import { TransportesComponent } from './transportes/transportes.component';



@NgModule({
  declarations: [
    TransportesComponent,
  ],
  imports: [
    CommonModule,
    TransportesRoutingModule,
    OnibusModule,
    ItinerarioModule
  ],
  exports: [TransportesComponent]
})
export class TransportesModule { }
