import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }
  Url = 'https://jsonplaceholder.typicode.com/todos/1';

  getSomething() {
    return this.http.get(this.Url);
  }
}
