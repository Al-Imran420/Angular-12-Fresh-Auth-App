import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  baseUrl = "http://localhost:3001/"
  //baseUrl = ""

  cartTotalEmitter = new EventEmitter<Number>()
  cartLenghtEmitter = new EventEmitter<Number>()
  cartItemsEmitter = new EventEmitter<any>()
  favoriteLenghtEmitter = new EventEmitter<Number>()
  favoriteItemsEmitter = new EventEmitter<any>()
  productDetailsEmitter = new EventEmitter<any>()

  constructor(private http:HttpClient) {  }

  public isAuthenticated():boolean{
    //const userData = sessionStorage.getItem('userData');
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token_id');
    //if(token && token.length > 0){
    if(token != null && !helper.isTokenExpired(token)){
        return true;
    }else{
      return false;
    }
  }


}
