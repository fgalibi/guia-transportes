import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AlertModalService } from './../../../shared/alert-modal.service';
import { LotacaoService } from './../../services/lotacao.service';
import { Lotacao } from './../model/Lotacao';

@Component({
  selector: 'app-lotacao',
  templateUrl: './lotacao.component.html',
  styleUrls: ['./lotacao.component.scss'],
})
export class LotacaoComponent implements OnInit {
  lotacaoList$: Observable<Lotacao[]>;
  search: string = '';
  page: number = 1;

  constructor(
    private lotacaoService: LotacaoService,
    private alertService: AlertModalService
  ) {
    this.lotacaoList$ = this.lotacaoService.list().pipe(
      catchError((error) => {
        this.handleError();
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar lista de lotação. Tente novamente.');
  }
}
