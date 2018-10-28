import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { OrganizationService } from '../../services/organization.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService,
              public profileService: ProfileService,
              public organizationService: OrganizationService) { }

  ngOnInit() {
    if (this.auth.isAuthenticated() && this.profileService.firstTime) {  // Check participant Profile
        this.auth.getProfile((err, profile) => {
          this.profileService.checkProfile(profile);
        });
      }
  }

  login() {
    this.auth.login();
  }

}
