import { OnibusModule } from './transportes/onibus/onibus.module';
import { LotacaoModule } from './transportes/lotacao/lotacao.module';

import { TransportesModule } from './transportes/transportes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch:'full', redirectTo: 'transportes'
  },
  {
    path: 'transportes',
    loadChildren: () => import('./transportes/transportes.module').then(m => m.TransportesModule)
  },
  {
    path: 'onibus',
    loadChildren: () => import('./transportes/onibus/onibus.module').then(m => m.OnibusModule)
  },
   {
    path: 'lotacao',
    loadChildren: () => import('./transportes/lotacao/lotacao.module').then(m => m.LotacaoModule)
  },
   {
    path: 'itinerario',
    loadChildren: () => import('./transportes/itinerario/itinerario.module').then(m => m.ItinerarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
