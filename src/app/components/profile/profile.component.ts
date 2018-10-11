import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { EntityService } from '../../services/entity.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  profileID: string;

  constructor( public auth: AuthService,
               private entityService: EntityService) { }

  ngOnInit() {
    // No puedes lanzar una exception en onInit, hay que capturarla
    try {
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
      } else {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
          this.profileID = this.profile.sub.substring(6);
          this.entityService.profileID = this.profileID;
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
  login() {
    this.auth.login();
  }
  }
