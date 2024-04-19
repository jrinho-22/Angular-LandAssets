import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
    public _resource: string = '';
    private _apiUrl: string = `http://localhost:3001`;
    public _params: string = '';

    constructor(private http: HttpClient) {}

    get updatedUrl() {
        return `${this._apiUrl}/${this._resource}`
    }

    getData<T>(): Observable<T> {
        return this.http.get<T>(this.updatedUrl);
    }

    getDataa(): Observable<Blob> {
        return this.http.get(this.updatedUrl, { responseType: 'blob' });
    }

    postData<T>(formData: T) {
        return this.http.post<T>(this.updatedUrl, formData);
    }
}