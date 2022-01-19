import { Onibus } from './../onibus/model/onibus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnibusService {

  private readonly path: string = 'facades/process.php?a=nc&p=%25&t=o';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Onibus[]>(env.baseApi + this.path);
  }
}
