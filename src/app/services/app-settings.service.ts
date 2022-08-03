import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { settingsModel } from '../models/settingsModel';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {

  private _apiUrl: string;
  private headers = new HttpHeaders();
  private webUrl: string = '';
  public name: string = 'Aspire';
  results: any;

  constructor(private http: HttpClient) {
    this._apiUrl = 'https://localhost:7259/'
    this.webUrl = window.location.protocol + '//' + window.location.hostname;

  }

  public setHeaders() {
    this.headers = new HttpHeaders()
      .set('X-Host', this.webUrl)
  }

 
  GetSettings(): Promise<settingsModel> {
    this.setHeaders();

    let url = this._apiUrl + "aspire/getSettings";

    return this.http
      .get(url, { headers: this.headers, params : new HttpParams()
        .set('name', 'Codebox' )
        .set('isTest', true )
  })
      .toPromise()
      .then((response) =>
        response as Promise<settingsModel>
      )
  }





}
