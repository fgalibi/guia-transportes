import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LotacaoService } from './../../services/lotacao.service';
import { Lotacao } from './../model/Lotacao';

@Component({
  selector: 'app-lotacao',
  templateUrl: './lotacao.component.html',
  styleUrls: ['./lotacao.component.scss']
})
export class LotacaoComponent implements OnInit {
 lotacaoList$: Observable<Lotacao[]>;
  search: string = '';

  constructor(private lotacaoService: LotacaoService) {
     this.lotacaoList$ = this.lotacaoService.list()
     .pipe(
      catchError(error => {
        return of([])
      })
    )
  }

  ngOnInit(): void {}

  list() {
    this.lotacaoList$ = this.lotacaoService.list();
  }

}
