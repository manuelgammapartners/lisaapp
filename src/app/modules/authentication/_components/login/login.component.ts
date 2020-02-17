import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message:string

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.message = "HOLA"
  }
  login(): void {
    console.log("HOLA");
    this._router.navigate(['/consumer']);
  }


}
