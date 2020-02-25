import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _requestService: RequestService, ) { }


  postLogin(credentials: any):Observable<User>{
    return this._requestService.post('auth/web-app/login', credentials)
  }


}
