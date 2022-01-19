import { ItinerarioComponent } from './../itinerario/components/itinerario.component';
import { OnibusComponent } from './../../transportes/onibus/components/onibus.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', component: OnibusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnibusRoutingModule { }
