import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransportesComponent } from './transportes/transportes.component';

const routes: Routes = [
  {
    path: '', component: TransportesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportesRoutingModule { }
