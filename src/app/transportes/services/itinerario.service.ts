import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {
  private readonly path: string = 'facades/process.php?a=il';

  constructor(private httpClient: HttpClient) { }

  find(id: string) {
    return this.httpClient.get<[]>(env.baseApi + this.path + `&p=${id}`);
  }
}
