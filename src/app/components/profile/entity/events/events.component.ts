import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../../services/profile.service';
import { Event } from '../../../../models/event';

import { CreateEventComponent } from '../../entity/create-event/create-event.component';

import { MatDialog } from '@angular/material';  // Dialog

@Component({
  selector: 'entity-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  constructor(private profileService: ProfileService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewEvent(){
    const dialogRef = this.dialog.open(CreateEventComponent,{});  // New Dialog
  }

}
