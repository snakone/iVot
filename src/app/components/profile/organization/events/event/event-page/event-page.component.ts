import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../../../../../models/event';
import { Topic } from '../../../../../../models/topic';
import { Participant } from '../../../../../../models/participant';

import { EventService } from '../../../../../../services/event.service';
import { ProfileService } from '../../../../../../services/profile.service';
import { TopicService } from '../../../../../../services/topic.service';
import { ParticipantService } from '../../../../../../services/participant.service';

import { CreateTopicComponent } from '../../../../../static/create-topic/create-topic.component';
import { InviteParticipantComponent } from '../../../../../static/invite-participant/invite-participant.component';

import { MatDialog } from '@angular/material';  // Dialog

import { Router, ActivatedRoute } from '@angular/router'; // Routes


@Component({
  selector: 'event-topics',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})

export class EventPageComponent implements OnInit {

  event: Event;

  constructor(public dialog: MatDialog,
              public eventService: EventService,
              private activeRoute: ActivatedRoute,
              private profile: ProfileService,
              public topicService: TopicService,
              public participant: ParticipantService,
              private router: Router) { }

  ngOnInit() {

    let eventID = this.activeRoute.snapshot.params.id; // Get the Event ID from URL
    this.profile.eventID = eventID;
    let organizationID = this.profile.organizationID; // Get the Organization ID from Service

    try {
      if (organizationID == undefined) throw Error
      else {
        this.topicService.getEventbyID(organizationID, eventID)  // Get Event by ID
         .subscribe(res => {
           this.event = res as Event;
         });
          this.getTopics(organizationID, eventID);  // Get Topics of the Event
          this.getParticipants(organizationID, eventID);  // Get Participants of the Event
      }
    } catch(err) {
      this.router.navigate(['/profile']);
    }
  }

  getTopics(organizationID, eventID){
    this.topicService.getTopics(organizationID, eventID)
     .then(res => {
       this.topicService.topics = res as Topic[];
     });
  }

  getParticipants(organizationID, eventID){
    this.participant.getParticipants(organizationID, eventID)
     .subscribe(res => {
       this.participant.participants = res as Participant[];
     })
  }

  openNewTopic(){
    const dialogRefTopic = this.dialog.open(CreateTopicComponent,{});  // New Dialog
  }

  openInviteParticipant(){
    const dialogRefInvite = this.dialog.open(InviteParticipantComponent,{});  // New Dialog
  }

}
