import { Component, OnInit, Input} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';

import { Topic } from '../../../../../../models/topic';
import { Event } from '../../../../../../models/event';

import { ProfileService } from '../../../../../../services/profile.service';

import { TopicService } from '../../../../../../services/topic.service';

import { MatDialog } from '@angular/material';  // Dialog


@Component({
  selector: 'create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})

export class CreateTopicComponent implements OnInit {

  @Input() organizationEvent: Event;

  topic: Topic;
  selectedTopic: Topic = <Topic>{};
  // defaultOptions: Option[]=[];
  // options: Option[]=[];

   constructor(private profileService: ProfileService,
               private topicService: TopicService,
               private toastr: ToastrService,
               public dialog: MatDialog) {}

   ngOnInit() {

   }

   onSubmit(addTopicForm: NgForm){
     let description = {description: addTopicForm.value.description};
     let eventID = this.profileService.eventID;
     let organizationID = this.profileService.organizationID;
     // let long = Object.keys(addTopicForm.value).length;
     // for (let x = 1; x < long; x++){
     //   this.options.push({
     //     id: `${x}`,
     //     option: addTopicForm.value[x-1]
     //   })
     // };

     if (description == null)
     alert('Por favor, Rellena el formulario')
     else {
         // let newTopic: Topic = new Topic (question, this.options);
         // this.eventService.topicList.push(newTopic);
         this.topicService.addTopic(organizationID, eventID, description)
          .then(res => {
            this.topicService.getTopics(organizationID, eventID)
             .then(res => {
               this.topicService.topics = res as Topic[];
             }).then(() => {
                 this.toastr.success('Tema Creado', 'Muy bien!');
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

    // addQuestion($event, form: NgForm){
    //   event.preventDefault();
    //   this.defaultOptions.push({
    //     id: "",
    //     option: ""
    //   });
    // }

}
