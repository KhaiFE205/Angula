import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  addProduct(value: any) {
    throw new Error('Method not implemented.');
  }
  url = `http://127.0.0.1:8000/v1`;

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(`${this.url}/category`);
  }
  getCategoryDetail(id: string){
    return this.httpClient.get(`${this.url}/category/${id}`)
  }
  detlete(id: string){
     return this.httpClient.delete(`${this.url}/category/${id}`)
  }

  addCategory(body: any){
    return this.httpClient.post(`${this.url}/category`, body)
  }

  updateCategory(id: string,body: any){
    return this.httpClient.put(`${this.url}/category/${id}`, body)
  }
}
