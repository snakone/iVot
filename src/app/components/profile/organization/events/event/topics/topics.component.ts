import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../../../../../models/event';
import { Topic } from '../../../../../../models/topic';

import { EventService } from '../../../../../../services/event.service';
import { ProfileService } from '../../../../../../services/profile.service';
import { TopicService } from '../../../../../../services/topic.service';

import { CreateTopicComponent } from '../create-topic/create-topic.component';

import { MatDialog } from '@angular/material';  // Dialog

import { Router, ActivatedRoute } from '@angular/router'; // Routes


@Component({
  selector: 'event-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})

export class TopicsComponent implements OnInit {

  @Input() organizationEvent: Event;
  openNew: boolean = false;
  event: Event;

  constructor(public dialog: MatDialog,
              public eventService: EventService,
              private activeRoute: ActivatedRoute,
              private profileService: ProfileService,
              public topicService: TopicService,
              private router: Router) { }

  ngOnInit() {

    let eventID = this.activeRoute.snapshot.params.id; // Get the Event ID from URL
    this.profileService.eventID = eventID;
    let organizationID = this.profileService.organizationID; // Get the Organization ID from Service

    try {
      if (organizationID == undefined) throw Error
      else {
        this.topicService.getEventbyID(organizationID, eventID)  // Get Event by ID
         .subscribe(res => {
           this.event = res as Event;
         });
            this.getTopics(organizationID, eventID);  // Get Topics of the Event
      }
    } catch(err) {
      this.router.navigate(['/profile/']);
    }
  }

  getTopics(organizationID, eventID){
    this.topicService.getTopics(organizationID, eventID)
     .then(res => {
       this.topicService.topics = res as Topic[];
     });
  }

  openNewTopic(){
    const dialogRef = this.dialog.open(CreateTopicComponent,{});  // New Dialog
  }

}
