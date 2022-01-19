import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { LotacaoComponent } from './components/lotacao.component';
import { LotacaoRoutingModule } from './lotacao-routing.module';

@NgModule({
  declarations: [
    LotacaoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    LotacaoRoutingModule,
    SharedModule
  ],
  exports: [LotacaoComponent]
})
export class LotacaoModule { }
