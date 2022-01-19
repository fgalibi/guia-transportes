import { AlertModalService } from './../../../shared/alert-modal.service';
import { AlertModalComponent } from './../../../shared/components/alert-modal/alert-modal.component';
import { Component, OnInit } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { OnibusService } from './../../services/onibus.service';
import { Onibus } from './../model/onibus';

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.scss'],
})
export class OnibusComponent implements OnInit {
  onibusList$: Observable<Onibus[]>;
  search: string = '';
  page: number = 1;
  error$ = new Subject<boolean>();

  constructor(
    private onibusService: OnibusService,
    private alertService: AlertModalService
  ) {
    this.onibusList$ = this.onibusService.list().pipe(
      catchError((error) => {
       this.handleError();
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar lista de ônibus. Tente novamente.');
  }
}
