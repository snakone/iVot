import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../../services/event.service';
import { Event } from '../../../../models/event';
import { AuthService } from '../../../../services/auth.service';

import { ProfileService } from '../../../../services/profile.service';

import { CreateEventComponent } from '../../entity/create-event/create-event.component';

import { MatDialog } from '@angular/material';  // Dialog

@Component({
  selector: 'entity-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(public auth: AuthService,
              private eventService: EventService,
              private profileService: ProfileService,
              public dialog: MatDialog) { }

  ngOnInit() {}

  openNewEvent(){
    const dialogRef = this.dialog.open(CreateEventComponent,{});  // New Dialog
  }

}
