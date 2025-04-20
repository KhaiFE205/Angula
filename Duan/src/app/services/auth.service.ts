import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = `http://127.0.0.1:8000/v1`;

  constructor(private httpClient: HttpClient) {}

  checkAdmin() {
    if (typeof window !== 'undefined') {
      let jsonData = localStorage.getItem('login');
      if (jsonData) {
        return JSON.parse(jsonData).admin === true;
      }
    }
    return false;
  }

  checkLogin() {
    if (typeof window !== 'undefined') {
      let jsonData = localStorage.getItem('login');
      if (jsonData) {
        return JSON.parse(jsonData);
      }
    }
    return false;
  }

  isAdmin() {
    return new Promise<boolean>((resolve, reject) => {
      if (typeof window !== 'undefined') {
        let jsonData = localStorage.getItem('login');
        if (jsonData) {
          resolve(JSON.parse(jsonData).admin === true);
          return;
        }
      }
      resolve(false);
    });
  }

  login(body: any) {
    return this.httpClient.post(`${this.url}/account/login`, body);
  }

  register(body: any) {
    return this.httpClient.post(`${this.url}/account/add`, body);
  }
}
