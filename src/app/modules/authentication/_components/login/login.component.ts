import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { logging } from 'protractor';
// import User from 'src/app/models/';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import User from 'src/app/models/user';
import Artist from 'src/app/models/artist';
import Admin from 'src/app/models/admin';
import Manager from 'src/app/models/manager';
import Consumer from 'src/app/models/consumer';
import Session from 'src/app/models/session';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: any = {};
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  message: string
  type: string
  isLoading: boolean

  constructor(private _router: Router, private _authService: AuthService, private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {

    this.type = "danger"
  }
  login(): void {
    this.loginModel.email = this.loginForm.value.email
    this.loginModel.password = this.loginForm.value.password
    this.isLoading = true;
    this._localStorageService.cleanLocalStorage();
    this._authService.postLogin(this.loginModel).subscribe(
      data => {
        var session = new Session().deserialize(data);
        this.redirectUser(session)
        this._localStorageService.storeSession(session);
      },
      error => {
        this.message = error.error.message;
        this.isLoading = false;
      });

  }

  onSubmit() {
    this.login();
  }

  redirectUser(obj){
    var user = new User();
    console.log("que trae"+JSON.stringify(obj));
    switch(obj.type){
      case 'admin':
        console.log("es admin"+obj.type);

        break;

      case 'service manager':
        console.log("es managaer"+obj.type);
        break;

      case 'consumer':
        console.log("es consumer"+obj.type);
        this._router.navigate(['/consumer']);
        break;

      case 'artist':
        console.log("es artista"+obj.type);
        break;

      default:
        console.log("no tiene ningun tipo");
        break;
    }
    return user;

    this.isLoading = false;
  }

  handleNavigationForUser() {


    let store = this._localStorageService.getSession()



    if (store.roles.some(e => e.name === 'admin')) {
      //Todo add this route and uncomment this._router.navigate(['/admin']);
      this.message = "There is not admin module yet, please login as consumer";
    }
    else if (store.roles.some(e => e.name === 'service manager')) {

      //Todo add this route and uncomment this._router.navigate(['/manager']);
      this.message = "There is not manager module yet, please login as consumer";
    }
    else if (store.roles.some(e => e.name === 'consumer')) {
      this._router.navigate(['/consumer']);
    } else {
      console.log("Web app is not for artist");
    }

    this.isLoading = false;


  }



}
