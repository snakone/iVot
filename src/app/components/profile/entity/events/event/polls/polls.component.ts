import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../../../../../models/event';
import { Poll } from '../../../../../../models/poll';

import { EventService } from '../../../../../../services/event.service';

import { CreatePollComponent } from '../create-poll/create-poll.component';

import { MatDialog } from '@angular/material';  // Dialog

import { ToastrService } from 'ngx-toastr';  // Toastr

@Component({
  selector: 'event-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})

export class PollsComponent implements OnInit {

  @Input() entityEvent: Event;
  openNew: boolean = false;
  polls: Poll[];

  constructor(public dialog: MatDialog,
              private toastr: ToastrService,
              private eventService: EventService) { }

  ngOnInit() {
    this.polls = this.eventService.pollList;
  }

  openNewPoll(){
    const dialogRef = this.dialog.open(CreatePollComponent,{});  // New Dialog
  }

}
