import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';

@Component({
  selector: 'app-upcoming-appts',
  templateUrl: './upcoming-appts.component.html',
  styleUrls: ['./upcoming-appts.component.scss']
})
export class UpcomingApptsComponent implements OnInit {
  message
  appointments: any;
  isLoading = true;
  constructor(private _requestService: RequestService) { }

  ngOnInit(): void {
    this.message = "Loading your appointments"
    this.getSmt();
  }


  getSmt() {
    this._requestService.getSomething().subscribe(
      data => {
          this.appointments = data['collection'];
          this.isLoading = false;
          console.log(this.appointments);
      },
      error => {
          console.log(error)
      });
  }

}
