import { Component, OnInit} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';

import { Topic } from '../../../models/topic';

import { ProfileService } from '../../../services/profile.service';
import { TopicService } from '../../../services/topic.service';

import { MatDialog } from '@angular/material';  // Dialog

@Component({
  selector: 'create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})

export class CreateTopicComponent implements OnInit {

  topic: Topic;
  selectedTopic: Topic = <Topic>{};

   constructor(private profileService: ProfileService,
               private topicService: TopicService,
               private toastr: ToastrService,
               public dialog: MatDialog) {}

   ngOnInit() { }

   onSubmit(addTopicForm: NgForm){
     let topic = {description: addTopicForm.value.description};
     let eventID = this.profileService.eventID;
     let organizationID = this.profileService.organizationID;

     if (topic.description == undefined)
     alert('Por favor, Rellena el formulario')
     else {
         this.topicService.addTopic(organizationID, eventID, topic) // Add Topic
          .then(res => {
            this.topicService.getTopics(organizationID, eventID) // After add, get Topics again
             .then(res => {
               this.topicService.filteredTopics = res as Topic[];
                this.topicService.topics = res as Topic[];
             }).then(() => {
                 this.toastr.success('Tema Creado');
                 this.dialog.closeAll();
                 this.resetForm(addTopicForm); // Reset the FORM
             });
          });
      }
   }

   resetForm(addTopicForm?: NgForm){
    if (addTopicForm != null) // Reset form if not empty and we add a empty Topic
      addTopicForm.reset();
      this.topic = <Topic>{}; // Instance a Empty Topic Class
    }

}
