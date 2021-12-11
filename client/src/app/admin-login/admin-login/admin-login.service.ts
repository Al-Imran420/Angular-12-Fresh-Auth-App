import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../services/auth.service'

@Injectable({
  providedIn: 'root'
})

export class AdminLoginService {

  authToken: any;
  user: any;
  curentUser = new EventEmitter<any>()

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  registerUser(user:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const url = this.authService.baseUrl + 'users/register';
    return this.http.post(url, user, { headers: headers })
  }

  //Log In
  authenticateUser(user: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const url = this.authService.baseUrl + 'users/authenticate';
    return this.http.post<any>(url, user, { headers: headers })
  }

  storeUserData(token:any, user:any) {
    localStorage.setItem('token_id', token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loggedIn() {
    const helper = new JwtHelperService();
    const token: any = localStorage.getItem('token_id');
    return token != null && !helper.isTokenExpired(token);
  }

  //Log Out
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  //User Roal
  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const token = JSON.parse(localStorage.getItem('token_id')!);
    if (token != null && !helper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }
  userAdmin():any {
    if (this.isAuthenticated() === true) {
      var userCredentials = JSON.parse(localStorage.getItem('user')!);
      return userCredentials.userrole === "Administrator";
    }
  }
  userSuperior():any {
    if (this.isAuthenticated() === true) {
      var userCredentials = JSON.parse(localStorage.getItem('user')!);
      return userCredentials.userrole === "Superior";
    }
  }
  userCollaborator():any {
    if (this.isAuthenticated() === true) {
      var userCredentials = JSON.parse(localStorage.getItem('user')!);
      return userCredentials.userrole === "Collaborator";
    }
  }

}
