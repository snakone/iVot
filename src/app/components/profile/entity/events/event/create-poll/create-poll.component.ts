import { Component, OnInit, Input} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';

import { Poll } from '../../../../../../models/poll';

import { Event } from '../../../../../../models/event';

import { ProfileService } from '../../../../../../services/profile.service';
import { EventService } from '../../../../../../services/event.service';

@Component({
  selector: 'create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  @Input() entityEvent: Event;

  poll: Poll;
  selectedPoll: Poll = <Poll>{};
  options: string[];
  entityID: string;
  pollOption1: string;
  pollOption2: string;
  pollOption3: string;
  pollOption4: string;

   constructor(private eventService: EventService,
               private profileService: ProfileService,
               private toastr: ToastrService) {}

   ngOnInit() {
     this.entityID = this.profileService.Auth;
   }

   onSubmit(addPollForm: NgForm){

     let question = addPollForm.value.question;
     let option1 = addPollForm.value.option1;
     let option2 = addPollForm.value.option2;
     let option3 = addPollForm.value.option3;
     let option4 = addPollForm.value.option4;
     let eventID = "12345";

     this.options = [option1, option2, option3, option4];

     if (option3 == undefined && option4 == undefined) {
       this.options = [option1,option2]
     }

     else if (option3 == undefined) {
       this.options = [option1,option2,option4]
     }

     else if (option4 == undefined) {
       this.options = [option1,option2,option3]
     }

     if (question == null || option1 == null || option2 == null)
     alert('Por favor, Rellena el formulario')

     else {
         let newPoll: Poll = new Poll (question, this.options);

         this.eventService.pollList.push(newPoll);
         
         this.toastr.success('Tema Creado', 'Muy bien!');
         this.resetForm(addPollForm); // Reset the FORM

      }
   }

   resetForm(addPollForm?: NgForm){
    if (addPollForm != null) // Reset form if not empty and we add a empty Poll
      addPollForm.reset();
      this.selectedPoll = <Poll>{}; // Instance a Empty Poll Class
}

 }
