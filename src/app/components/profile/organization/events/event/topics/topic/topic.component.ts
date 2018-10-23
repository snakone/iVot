import { Component, OnInit, Input } from '@angular/core';

import { EventService } from '../../../../../../../services/event.service';
import { Event } from '../../../../../../../models/event';

import { Topic } from '../../../../../../../models/topic';

@Component({
  selector: 'event-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})

export class TopicComponent implements OnInit {

  @Input() topic: Topic;
  panelOpenState: boolean;

  constructor(public eventService: EventService) { }

  ngOnInit() {
  }

}
