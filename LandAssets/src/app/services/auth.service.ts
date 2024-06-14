import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import resources from '../config';
import IState from '../interfaces/IState';
import { HttpRequestService } from './HttpRequest.service';
import { getPropertyFromResource } from '../utils/typeUtil/resourceKey';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends HttpRequestService<String> {
  private _authenticatedSubject = new BehaviorSubject<{
    authenticated: boolean;
    user: any;
  }>({ authenticated: false, user: undefined });
  private _authenticated$ = this.authenticatedSubject.asObservable();

  constructor(http: HttpClient) {
    super(http);

    const token = localStorage.getItem('token');
    if (token) {
      const arrayToken = token.split('.');
      const userData = JSON.parse(atob(arrayToken[1]));
      this.getUser(userData.userId).subscribe((user) => {
        this._authenticatedSubject.next({ authenticated: true, user: user });
      });
    }
  }

  config() {
    return {
      resource: getPropertyFromResource('LOGIN'),
    };
  }

  getUser(userId: number | string): Observable<any[]> {
    return this.http.get<any[]>(`${this._apiUrl}/user/${userId}`, {
      headers: this._headers,
    });
  }

  signIn(email: string, pass: string) {
    this.getToken(email, pass).subscribe(
      (token: { access_token: string; user: any }) => {
        localStorage.setItem('token', token.access_token);
        this.authenticatedSubject.next({
          authenticated: true,
          user: token.user,
        });
      }
    );
  }

  signUp(form: FormGroup) {
    this.http
      .post<{ access_token: string; user: any }>(
        `${this.updatedUrl}/register`,
        form
      )
      .subscribe((token: { access_token: string; user: any }) => {
        localStorage.setItem('token', token.access_token);
        this.authenticatedSubject.next({
          authenticated: true,
          user: token.user,
        });
      });
  }

  getToken(
    email: string,
    pass: string
  ): Observable<{ access_token: string; user: any }> {
    return this.http.post<{ access_token: string; user: any }>(
      `${this.updatedUrl}`,
      {
        email: email,
        password: pass,
      }
    );
  }

  get authenticatedSubject() {
    return this._authenticatedSubject;
  }

  get authenticated$() {
    return this._authenticated$;
  }
}
