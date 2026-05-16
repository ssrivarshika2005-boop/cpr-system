import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CPRService {

  api = 'http://localhost:5000/api/cpr';

  constructor(private http: HttpClient) {}

  submitForm(data: any) {
    return this.http.post(this.api, data);
  }
}