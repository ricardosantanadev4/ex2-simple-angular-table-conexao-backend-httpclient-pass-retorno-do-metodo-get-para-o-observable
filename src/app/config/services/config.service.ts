import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly configurl = 'HttpClientModule';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Config[]>(this.configurl);
  }
}
