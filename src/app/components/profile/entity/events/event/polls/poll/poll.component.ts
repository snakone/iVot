import { Component, OnInit, Input } from '@angular/core';

import { EntityService } from '../../../../../../../services/entity.service';
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

  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.pollList = this.entityService.pollList;
    this.entityService.profileID;
  }

}
