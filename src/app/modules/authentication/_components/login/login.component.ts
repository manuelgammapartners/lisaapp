import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message:string
  type:string
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.message = "There was an error, please try again"
    this.type = "danger"
  }
  login(): void {
  
    this._router.navigate(['/consumer']);
  }


}
