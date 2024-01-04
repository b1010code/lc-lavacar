import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllItems() {
    return this.http.get(`${this.baseUrl}/customer/get`);
  }

  getItemById(id: number) {
    return this.http.get(`${this.baseUrl}/customer/${id}`);
  }

  createItem(item: any) {
    return this.http.post(`${this.baseUrl}/customer/save`, item);
  }

  updateItem(id: number, item: any) {
    return this.http.put(`${this.baseUrl}/customer/${id}`, item);
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.baseUrl}/customer/${id}`);        
  }
}
