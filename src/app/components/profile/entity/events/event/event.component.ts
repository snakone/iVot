import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../../../models/event';

import { Router } from '@angular/router'; // Router

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {

  @Input() event: Event;
  panelOpenState: boolean;

  constructor(private router: Router) { }

  ngOnInit() {}

  createPoll(event: Event){  // Go to Entity - > Events - Poll Page
    this.router.navigate(['/profile/', event.id]);
  }

}
