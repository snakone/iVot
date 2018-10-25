import { Component, OnInit, Input } from '@angular/core';

import { ProfileService } from '../../../../../../../services/profile.service';
import { TopicService } from '../../../../../../../services/topic.service';

import { Event } from '../../../../../../../models/event';
import { Topic } from '../../../../../../../models/topic';

import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';  // Material Dialog

import { ConfirmComponent } from '../../../../../../../components/static/confirm/confirm.component';

@Component({
  selector: 'event-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})

export class TopicComponent implements OnInit {

  @Input() topic: Topic;
  panelOpenState: boolean;

  constructor(private profile: ProfileService,
              private topicService: TopicService,
              private toastr: ToastrService,
              public dialog: MatDialog) { }

  ngOnInit() {}

  deleteTopic($event){
    event.preventDefault();
    const dialogRef = this.dialog.open(ConfirmComponent,{});  // New Dialog -> Confirm Dialog Component

    dialogRef.afterClosed().subscribe(result => { // After Dialog Closed
      if (result) {
            this.topicService.deleteTopic(this.profile.organizationID,
                                          this.profile.eventID, this.topic.id)
             .then(res => {
               this.topicService.getTopics(this.profile.organizationID,
                                             this.profile.eventID)
                .then(res => {
                  this.topicService.topics = res as Topic[];  // Get Topics again
                }).then(() => this.toastr.error('Oh', 'Tópico Eliminado'))
             });
           }  // End of If (result)
      });
  }

}
