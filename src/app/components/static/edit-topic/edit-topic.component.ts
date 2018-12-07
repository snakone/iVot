import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { Topic } from '../../../models/topic';

import { TopicService } from '../../../services/topic.service';
import { ProfileService } from '../../../services/profile.service';

import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.css']
})

export class EditTopicComponent implements OnInit {

  constructor(private toastr: ToastrService,
              public dialog: MatDialog,
              public topicService: TopicService,
              private profile: ProfileService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let topic = {description: form.value.description};

    this.topicService.updateTopic(this.profile.organizationID, this.profile.eventID,
                                  form.value.id, topic)
     .then(()=> {
         this.toastr.info('Tópico Editado');
         this.topicService.getTopics(this.profile.organizationID, this.profile.eventID)
          .then(res => {
            this.topicService.topics = res as Topic[];
            this.topicService.filteredTopics = res as Topic[];
          });
            this.dialog.closeAll();
     });
  }

}
