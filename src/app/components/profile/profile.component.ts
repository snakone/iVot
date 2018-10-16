import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { EntityService } from '../../services/entity.service';

import { CreateEventComponent } from './entity/create-event/create-event.component';

import { MatDialog } from '@angular/material';  // Dialog

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( public auth: AuthService,
               private profileService: ProfileService,
               public entityService: EntityService,
               public dialog: MatDialog) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
        this.auth.getProfile((err, profile) => {
          this.profileService.checkProfile(profile);
        });
      }
  }

  login() {
    this.auth.login();
  }

  openNewEvent(){
    const dialogRef = this.dialog.open(CreateEventComponent,{});  // New Dialog
  }

}
