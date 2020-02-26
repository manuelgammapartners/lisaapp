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
  roles
  constructor(private _router: Router, private _authService: AuthService,private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {

    this.type = "danger"
  }
  login(): void {
    this.loginModel.email = this.loginForm.value.email
    this.loginModel.password = this.loginForm.value.password
    
    this._authService.postLogin(this.loginModel).subscribe(
      data => {
        this._localStorageService.storeSession(data);
        console.log("data"+JSON.stringify(data));
        this.roles = data["roles"];
        
        this._router.navigate(['/consumer']);
      }, 
      error => {
        this.message = error.error.message;
        console.log("error"+JSON.stringify(error));
      });
    
  }

  onSubmit() {


    // TODO: Use EventEmitter with form value
    //console.warn(this.loginForm.value);
    //this._router.navigate(['/consumer']);
    this.login();
  }


  verifyRole(roles){
    console.log("estos son los roles"+JSON.stringify(roles));
    let role = roles.some(e => e.name === 'admin');
    

  }



}
