import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000';

  userLogin(body:any) : Observable<any> {
    const url = `${this.baseUrl}/user/login`;
    return this.http.post(url, body).pipe(map((res: any) => {
      return res;
    }))
  }
// For Signup
  userCreate(body:any) : Observable<any> {
    const url = `${this.baseUrl}/user/create`;
    return this.http.post(url, body).pipe(map((res: any) => {
      return res;
    }))
  }
  // To get Userinfo
  getUserInfo() : Observable<any> {
    const token = localStorage.getItem('jwtToken');
    let authHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': ''+token})
    const url = `${this.baseUrl}/user/getInfo`;
    return this.http.get(url, {headers: authHeaders}).pipe(map((res: any) => {
      return res;
    }))
  }

}
