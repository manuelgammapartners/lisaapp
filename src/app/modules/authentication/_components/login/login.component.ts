import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { logging } from 'protractor';
// import User from 'src/app/models/';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import User from 'src/app/models/user';
import Artist from 'src/app/models/artist';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';





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
        this.createSessionUser(data)
        this._localStorageService.storeSession(data);
        this._router.navigate(['/consumer']);
        //this.handleNavigationForUser()
      },
      error => {
        this.message = error.error.message;
        this.isLoading = false;
      });

  }

  //delete later
  onSubmit() {


    // TODO: Use EventEmitter with form value

    this.login();
  }

  createSessionUser(obj) {
    /*var user = new User();
    console.log("que trae"+JSON.stringify(obj));
    switch(obj.type){
      case 'admin':
        console.log("es admin"+obj.type);
        break;

      case 'service manager':
        console.log("es managaer"+obj.type);
        break;

      case 'consumer':
        console.log("es admin"+obj.type);
        break;
      case 'artist'
        console.log();
        break;
    }*/

    /*

    if (obj.type.some(e => e.name === 'admin')) {
      //Todo add this route and uncomment this._router.navigate(['/admin']);
      //user = new Admin();
      this.message = "There is not admin module yet, please login as consumer";
    }
    else if (obj.type.some(e => e.name === 'service manager')) {
      //user = new Manager();
      //Todo add this route and uncomment this._router.navigate(['/manager']);
      this.message = "There is not manager module yet, please login as consumer";
    }
    else if (obj.type.some(e => e.name === 'consumer')) {
      //user = new Consumer();
      console.log("entro aca y es un user");
      this._router.navigate(['/consumer']);
    } else {
      console.log("Web app is not for artist");
    }

    return user;*/
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
