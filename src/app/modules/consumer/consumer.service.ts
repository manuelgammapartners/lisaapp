import { Injectable } from '@angular/core';


import { RequestService } from '../../request.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: RequestService) { }


  getUpcomingAppts(){
    let url = 'appointments/mine?access_token=s0sPMpmfbFIMGziuYudxpj4OtqD9QWWcS5o3X3LoMQwOaIStjzHcf1C24wo7trip3BJwHeMy0X1dO52ls1R6eUlFiD88h2zj3JtL';
    return this.http.get(url);
  }


}
