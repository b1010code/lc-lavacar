import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllItems() {
    return this.http.get(`${this.baseUrl}/employee/get`);
  }

  getItemById(id: number) {
    return this.http.get(`${this.baseUrl}/employee/${id}`);
  }

  createItem(item: any) {
    return this.http.post(`${this.baseUrl}/employee/save`, item);
  }

  updateItem(id: number, item: any) {
    return this.http.put(`${this.baseUrl}/employee/${id}`, item);
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.baseUrl}/employee/${id}`);        
  }
}
