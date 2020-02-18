import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  rutas: any
  constructor(private router: Router) { }



  ngOnInit(): void {

    this.rutas  = this.router.url.split('/');
    
  }

}
