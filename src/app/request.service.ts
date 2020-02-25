import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:1338/appointments/mine?access_token=s0sPMpmfbFIMGziuYudxpj4OtqD9QWWcS5o3X3LoMQwOaIStjzHcf1C24wo7trip3BJwHeMy0X1dO52ls1R6eUlFiD88h2zj3JtL';

  getSomething() {
    return this.http.get(this.Url);
  }
}
