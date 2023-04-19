import { Component } from '@angular/core';
import { OktaAuthService } from 'src/app/app.service';
import { DCCService } from '../../../../app/services/dcc.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  payload: any;
  token:any;

  constructor(private dccService: DCCService,public oktaAuth: OktaAuthService) {}

  ngOnInit(): void {
    this.getToken();
  }

  async getToken() {
    this.token = await this.oktaAuth.getToken();
    console.log(' this.token - ' + JSON.stringify( this.token));
    console.log(' this.federationID - ' + this.token.federationId);
    this.getLandingPageData(this.token.federationId);
  }

  getLandingPageData(id:any): void {
    this.dccService.getLandingPageData(id).subscribe((payload) => {
      this.payload = payload;

    });
  }
}
