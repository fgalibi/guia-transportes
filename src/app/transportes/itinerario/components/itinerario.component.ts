import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ItinerarioService } from './../../services/itinerario.service';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.scss'],
})
export class ItinerarioComponent implements OnInit {
  itinerario$!: Observable<any>;
  itinerarioList: any[] = [];
  itinerario: any = {
    codigo: 0,
    idLinha: 0,
    nome: '',
  };
  page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itinerarioService: ItinerarioService
  ) {
    this.getItinerario();
  }

  ngOnInit(): void {}

  getItinerario() {
    this.itinerario$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.itinerarioService.find(params.get('id')!)
      )
    );

    this.itinerario$.subscribe((obj) => {
      this.itinerario.codigo = obj['codigo'];
      this.itinerario.idLinha = obj['idLinha'];
      this.itinerario.nome = obj['nome'];
      let arr = Object.keys(obj).map((key) => ({ type: key, value: obj[key] }));
      this.itinerarioList = arr;
    });
  }

  onNavigate(value: any) {
    const url = `https://www.google.com/maps/?q=${value.lat},${value.lng}`;
    window.open(url, '_blank');
  }
}
