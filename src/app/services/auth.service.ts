import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { PersonModel } from '../models/PersonModel';
import { UserRegistration } from '../models/UserRegistration';

@Injectable()
export class AuthService {
  private _apiUrl: string;
  private headers = new HttpHeaders();
  private webUrl: string = '';
  public $isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(private http: HttpClient) {
    this._apiUrl = 'https://localhost:7259/'
    this.webUrl = window.location.protocol + '//' + window.location.hostname;

  }

  public setHeaders() {
    this.headers = new HttpHeaders()
      .set('X-Host', this.webUrl)
  }


   
  Register(userRegistration: UserRegistration): Observable<any> {
    this.setHeaders();

    let url = this._apiUrl + "auth/register";
     return this.http
      .post(url, userRegistration, { headers: this.headers})
      .pipe(
        map((response: any) => response)
        )}

  public GetLoginStatus(): BehaviorSubject<boolean>{
    debugger;
    return this.$isLoggedIn;
  }

  public setLoginStatus(user: any){
    debugger;
    this.$isLoggedIn.next(user.entityApplicationUserID > 0);
  }

  Login(email: string, password: string) : Observable<any> {
    let url = this._apiUrl + "auth/login";

    return this.http.get(url, { headers: this.headers, params: new HttpParams()
      .set('email', email)
      .set('password', password)
     } )
    .pipe(map (response => {
      this.setLoginStatus(response);
      return response
    
    }));
  }
}
