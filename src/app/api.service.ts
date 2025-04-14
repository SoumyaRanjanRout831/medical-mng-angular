import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllMedicine(){
   return this.http.get("http://localhost:8000/api/medicine/get-medicine");
  }
}
