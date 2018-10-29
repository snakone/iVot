import { Component, OnInit, Input } from '@angular/core';

import { ProfileService } from '../../../../../../../services/profile.service';
import { TopicService } from '../../../../../../../services/topic.service';

import { Event } from '../../../../../../../models/event';
import { Topic } from '../../../../../../../models/topic';

import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';  // Material Dialog

import { ConfirmComponent } from '../../../../../../../components/static/confirm/confirm.component';
import { CreateOptionComponent } from '../../../../../../static/create-option/create-option.component';

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

  ngOnInit() {
  }

  openNewOption(){
    const dialogRef = this.dialog.open(CreateOptionComponent, {data:{topicID: this.topic.id}});  // New Dialog
  }

  goResult(topic){
    console.log(topic)
  }

  deleteTopic(event){
    event.preventDefault();
    const dialogConfirm = this.dialog.open(ConfirmComponent,{});  // New Dialog -> Confirm Dialog Component

    dialogConfirm.afterClosed().subscribe(result => { // After Dialog Closed
      if (result) {
            this.topicService.deleteTopic(this.profile.organizationID,
                                          this.profile.eventID, this.topic.id)
        .catch(err => {
              console.log("Error");
              // console.log(err)
            })
             .then(res => {
               this.topicService.getTopics(this.profile.organizationID,
                                             this.profile.eventID)
                      .then(res => {
                        this.topicService.filteredTopics = res as Topic[];  // Get Topics again
                        this.topicService.topics = res as Topic[];  // Get Topics again
                      }).then(() => this.toastr.info('Tópico Eliminado'))
             });
           }  // End of If (result)
      });
  }

}
