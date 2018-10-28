import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Organization } from '../../models/organization';
import { Event } from '../../models/event';

import { ProfileService } from '../../services/profile.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '', // Generated by app.routes.ts
  templateUrl: './app-welcome.component.html',
  styleUrls: ['./app-welcome.component.css']
})

export class AppWelcomeComponent implements OnInit {

title: string;
events: Event[] = [];
organization: Organization;

  constructor( public auth: AuthService) {
    this.title = 'iVot';
}

  ngOnInit() {
  }

  login() {
    this.auth.login();  // Auth0 Login
  }

}
