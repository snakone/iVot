import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../../../../../models/event';

@Component({
  selector: 'event-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  @Input() entityEvent: Event;

  constructor() { }

  ngOnInit() {
  }

}
