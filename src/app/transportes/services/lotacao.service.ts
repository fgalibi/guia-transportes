import { Lotacao } from './../lotacao/model/Lotacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LotacaoService {

  private readonly path: string = 'facades/process.php?a=nc&p=%25&t=l';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Lotacao[]>(env.baseApi + this.path);
  }
}
