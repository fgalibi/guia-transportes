import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  constructor(private onibusService: OnibusService) {
    this.onibusList$ = this.onibusService.list()
    .pipe(
      catchError(error => {
        return of([])
      })
    )
  }

  ngOnInit(): void {}
}
