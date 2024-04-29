import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export abstract class HttpRequestService {
    private _apiUrl: string = `http://localhost:3001`;
    private _params: string = '';
    // protected _resource: String = '';
    private _config: { resource: string } = { resource: '' };

    constructor(protected http: HttpClient) {
        this._config = this.config();
    }

    get updatedUrl() {
        return `${this._apiUrl}/${this._config.resource}`;
    }

    abstract config(): { resource: string };

    getData<T>(id: string | number): Observable<T> {
        return this.http.get<T>(`${this.updatedUrl}/${id}`);
    }

    getDataa(): Observable<Blob> {
        return this.http.get(this.updatedUrl, { responseType: 'blob' });
    }

    postData<T>(formData: T) {
        return this.http.post<T>(this.updatedUrl, formData);
    }
}
