import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';  // Dialog

import { OrganizationService } from '../../../../services/organization.service';
import { CreateUserComponent } from '../../../static/create-user/create-user.component';


@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  openNewUser(){
    const dialogRef = this.dialog.open(CreateUserComponent,{});  // New Dialog -> Confirm Dialog Component
  }

}
