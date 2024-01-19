import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WashingService {

  private baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  getAllItems() {
    return this.http.get(`${this.baseUrl}/priceWashing/get`);
  }

  getItemById(id: number) {
    return this.http.get(`${this.baseUrl}/priceWashing/${id}`);
  }

  createItem(item: any) {
    return this.http.post(`${this.baseUrl}/priceWashing/save`, item);
  }

  updateItem(id: number, item: any) {
    return this.http.put(`${this.baseUrl}/priceWashing/${id}`, item);
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.baseUrl}/priceWashing/${id}`);        
  }

}
