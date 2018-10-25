import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../../../services/organization.service';
import { Event } from '../../../../models/event';

import { CreateEventComponent } from '../../../static/create-event/create-event.component';

import { MatDialog } from '@angular/material';  // Dialog

@Component({
  selector: 'organization-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  constructor(public organization: OrganizationService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewEvent(){
    const dialogRef = this.dialog.open(CreateEventComponent,{});  // New Dialog
  }

}
