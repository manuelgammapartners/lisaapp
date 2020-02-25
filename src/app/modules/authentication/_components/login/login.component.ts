import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  message: string
  type: string
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.message = "There was an error, please try again"
    this.type = "danger"
  }
  login(): void {

    this._router.navigate(['/consumer']);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    this._router.navigate(['/consumer']);
  }


}
