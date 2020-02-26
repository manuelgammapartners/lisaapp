import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _requestService: RequestService, private _localStorageService: LocalStorageService) { }


  postLogin(credentials: any): Observable<User> {
    //return this._requestService.post('auth/web-app/login', credentials)
    this._localStorageService.storeSession(credentials);
    return this._requestService.postT<User>('auth/web-app/login', credentials);
  }


}
