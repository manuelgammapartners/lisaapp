import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { logging } from 'protractor';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';




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
  message:string
  type:string
  isLoading: boolean
  constructor(private _router: Router, private _authService: AuthService,private _localStorageService: LocalStorageService) { }

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
        this._localStorageService.storeSession(data);
        
        this.handleNavigationForUser()
      }, 
      error => {
        this.message = error.error.message;
        console.log("error"+JSON.stringify(error));
      });
    
  }

  onSubmit() {


    // TODO: Use EventEmitter with form value

    this.login();
  }


  handleNavigationForUser(){


    let store = this._localStorageService.getSession()
    


    if(store.roles.some(e => e.name === 'admin')){
      this._router.navigate(['/admin']);
    }
    else if(store.roles.some(e => e.name === 'service manager')){
      this._router.navigate(['/manager']);
    }
    else if(store.roles.some(e => e.name === 'consumer')){
      this._router.navigate(['/consumer']);
    }else {
      console.log("Web app is not for artist");
    }

    this.isLoading = false;


  }



}
