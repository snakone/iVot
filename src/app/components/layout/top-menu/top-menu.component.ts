import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(public auth: AuthService,
              public profileService: ProfileService,
              private router: Router) {
   }

  ngOnInit() {
  }

  public logout(): void {
    this.auth.logout();
    this.profileService.admin = false;
    window.location.href='https://ivot.eu.auth0.com/v2/logout';  // URI to completely Log Out from Auth0
  }

  login() {
    this.auth.login();
  }

}
