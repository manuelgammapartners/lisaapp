import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-consumer-top-bar',
  templateUrl: './consumer-top-bar.component.html',
  styleUrls: ['./consumer-top-bar.component.scss']
})
export class ConsumerTopBar implements OnInit, OnDestroy {

  constructor(private _router: Router) {
    _router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log("VAL", val);
      }
    });
  }

  public ngOnInit() {

  }

  public ngOnDestroy() {

  }
}
