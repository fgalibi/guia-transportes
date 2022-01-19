import { ItinerarioModule } from './itinerario/itinerario.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItinerarioComponent } from './itinerario/components/itinerario.component';
import { OnibusModule } from './onibus/onibus.module';
import { TransportesRoutingModule } from './transportes-routing.module';
import { TransportesComponent } from './transportes/transportes.component';
import { LotacaoComponent } from './lotacao/components/lotacao.component';



@NgModule({
  declarations: [
    TransportesComponent,
    ItinerarioComponent
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
