import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../../services/event.service';
import { Event } from '../../../../models/event';

@Component({
  selector: 'entity-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventList: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventList = this.eventService.events;
  }

}
