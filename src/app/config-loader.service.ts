import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { AppConfig } from './config.model';

@Injectable()
export class ConfigLoaderService {

public appTitle = 'Not Set Yet';

  constructor(private httpClient: HttpClient) { }

  initialize() {
    return this.httpClient.get<AppConfig>('./assets/config.json')
    .pipe(tap((response: AppConfig) => {
      this.appTitle = response.title;
    })).toPromise<AppConfig>();
  }

}