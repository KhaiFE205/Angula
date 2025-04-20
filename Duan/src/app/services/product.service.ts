import { Category } from './../models/category';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { query } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = `http://127.0.0.1:8000/v1`;

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(`${this.url}/product`);
  }
  getProductDetail(id: string){
    return this.httpClient.get(`${this.url}/product/${id}`)
  }
  getProductByQuery(params: any){
    let query = ``;
    if(params.category) {
      query = `category=${params.category}`
    }
    if(params.keyword){
      query = `keyword=${params.keyword}`
    }
    return this.httpClient.get(`${this.url}/product?${query}`);
  }
  addProduct(body: any){
    return this.httpClient.post(`${this.url}/product`, body)
  }
  detlete(id: string){
    return this.httpClient.delete(`${this.url}/product/${id}`)
 }
 updateProduct(id: string,body: any){
  return this.httpClient.put(`${this.url}/product/${id}`, body)
}
}
