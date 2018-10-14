import { Component, OnInit, Input } from '@angular/core';

import { EventService } from '../../../../../../../services/event.service';
import { Event } from '../../../../../../../models/event';


import { CustomPoll } from '../../../../../../../models/poll';

@Component({
  selector: 'event-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  @Input() entityEvent: Event;

  pollList: CustomPoll[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.pollList = this.eventService.pollList;
  }

}
