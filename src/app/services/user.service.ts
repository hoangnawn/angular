import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../components/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signup(users: any): Observable<IUser[]>{
    return this.http.post<IUser[]>(`http://localhost:3000/users`, users)
  }
  signin(users: any): Observable<IUser[]>{
    return this.http.post<IUser[]>(`http://localhost:3000/signin`, users)
  }
}
