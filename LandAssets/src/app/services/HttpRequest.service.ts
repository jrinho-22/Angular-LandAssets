import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractControl, FormGroup } from '@angular/forms';
import IState from '../interfaces/IState';
import resources from '../config/resources';

@Injectable()
export abstract class HttpRequestService<T> {
  protected _apiUrl: string = `http://localhost:3002`;
  private _params: string = '';
  // protected _resource: String = '';
  private _config: { resource: string } = { resource: '' };
  private _token: string | null;
  protected _headers: HttpHeaders | undefined;

  constructor(protected http: HttpClient) {
    this._config = this.config();
    this._token = localStorage.getItem('token');

    if (this._token) {
      this._headers = new HttpHeaders({
        Authorization: `Bearer ${this._token}`,
      });
    }
  }

  get updatedUrl() {
    return `${this._apiUrl}/${this._config.resource}`;
  }

  // typeof resources[keyof typeof resources] accept all return types containning in resources
  abstract config(): { resource: (typeof resources)[keyof typeof resources] };

  getData(id: string | number, params?: any): Observable<T[]> {
    return this.http.get<T[]>(`${this.updatedUrl}/${id}`, {
      headers: this._headers,
      params: params,
    });
  }

  getDataa(): Observable<Blob> {
    return this.http.get(this.updatedUrl, { responseType: 'blob' });
  }

  postData(formData: FormGroup | FormData | Record<string, any>): Observable<T> {
    return this.http.post<T>(this.updatedUrl, formData, {
      headers: this._headers,
    });
  }

  putData(id: number | string, formData: FormGroup | FormData): Observable<T> {
    return this.http.put<T>(`${this.updatedUrl}/${id}`, formData, {
      headers: this._headers,
    });
  }
}
