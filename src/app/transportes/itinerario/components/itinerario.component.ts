import { Component, OnInit } from '@angular/core';

import { ItinerarioService } from './../../services/itinerario.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.scss'],
})
export class ItinerarioComponent implements OnInit {
  itinerario$!: Observable<any>;
  itinerarioList: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itinerarioService: ItinerarioService
  ) {}

  ngOnInit(): void {
    this.getItinerario();
  }

  getItinerario() {
    this.itinerario$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.itinerarioService.find(params.get('id')!)
      )
    );

    this.itinerario$.subscribe((obj) => {
      let arr = Object.keys(obj).map((key) => ({ type: key, value: obj[key] }));
      this.itinerarioList = arr;
    });
  }

  onNavigate(value: any) {
    const url = `https://www.google.com/maps/?q=${value.lat},${value.lng}`;
    window.open(url, '_blank');
}
}
