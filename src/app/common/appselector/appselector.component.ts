import { Component } from '@angular/core';
import { OktaAuthService } from 'src/app/app.service';
import { DCCService } from '../../services/dcc.service';

@Component({
  selector: 'app-appselector',
  templateUrl: './appselector.component.html',
  styleUrls: ['./appselector.component.css']
})
export class AppselectorComponent {
  payload: any;
  payload2: any;
  token:any;
  url:any;

  constructor(private dccService: DCCService,public oktaAuth: OktaAuthService) {}

  ngOnInit(): void {
    
    this.getToken();
  }

  async getToken() {
    this.token = await this.oktaAuth.getToken();
    console.log(' this.token - ' + JSON.stringify( this.token));
    console.log(' this.federationID - ' + this.token.federationId);
    this.getAppSelectorData(this.token.federationId);
    this.getLandingPageData(this.token.federationId);
  }

  getAppSelectorData(id:any): void {
    this.dccService
      .getAppSelectorData(id)
      .subscribe((payload) => {
        console.log('appselector data ' + JSON.stringify(payload));
        this.payload = payload;
      });
  }

  getLandingPageData(id:any): void {
    this.dccService.getLandingPageData(id).subscribe((payload) => {
      this.payload2 = payload;
      //this.url = '/assets/Facilityportal-2.png';
    });
  }
}
