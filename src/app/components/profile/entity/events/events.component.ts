import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../../services/event.service';
import { Event } from '../../../../models/event';

import { CreateEventComponent } from '../../entity/create-event/create-event.component';

import { MatDialog } from '@angular/material';  // Dialog

@Component({
  selector: 'entity-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents()
      .subscribe(res => {
        this.events = res as Event[];
      });
  }

  openNewEvent(){
    const dialogRef = this.dialog.open(CreateEventComponent,{});  // New Dialog
  }

}
