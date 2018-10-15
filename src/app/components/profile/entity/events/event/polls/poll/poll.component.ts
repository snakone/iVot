import { Component, OnInit, Input } from '@angular/core';

import { EventService } from '../../../../../../../services/event.service';
import { Event } from '../../../../../../../models/event';


import { Poll } from '../../../../../../../models/poll';

@Component({
  selector: 'event-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  @Input() entityEvent: Event;

  constructor(public eventService: EventService) { }

  ngOnInit() {

  }

}
