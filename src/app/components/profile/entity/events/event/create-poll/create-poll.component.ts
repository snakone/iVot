import { Component, OnInit, Input} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';

import { Poll } from '../../../../../../models/poll';
import { Option } from '../../../../../../models/option';
import { Event } from '../../../../../../models/event';

import { ProfileService } from '../../../../../../services/profile.service';
import { EventService } from '../../../../../../services/event.service';

import { MatDialog } from '@angular/material';  // Dialog

@Component({
  selector: 'create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  @Input() entityEvent: Event;

  poll: Poll;
  selectedPoll: Poll = <Poll>{};
  defaultOptions: Option[]=[];
  options: Option[]=[];

  entityID: string;

   constructor(private eventService: EventService,
               private profileService: ProfileService,
               private toastr: ToastrService,
               public dialog: MatDialog) {}

   ngOnInit() {
     this.entityID = this.profileService.Auth;
   }

   onSubmit(addPollForm: NgForm){
       let question = addPollForm.value.question;
       let eventID = "12345";  // Random
       let long = Object.keys(addPollForm.value).length - 1;

       for (let x = 0; x < long; x++){

         this.options.push({
           optionID: `${x}`,
           option: addPollForm.value[x]
         })
       };

       // this.options = [{
       //   optionID: "",
       //   option: option1
       // }, {
       //   optionID: "",
       //   option: option2
       // }, {
       //   optionID: "",
       //   option: option3
       // }, {
       //   optionID: "",
       //   option: option4
       // }];



       if (question == null || this.options[0] == null)
       alert('Por favor, Rellena el formulario')

       else {
           let newPoll: Poll = new Poll (question, this.options);
           this.eventService.pollList.push(newPoll);
           this.toastr.success('Tema Creado', 'Muy bien!');
           this.dialog.closeAll();
           this.resetForm(addPollForm); // Reset the FORM
        }
   }

   resetForm(addPollForm?: NgForm){
    if (addPollForm != null) // Reset form if not empty and we add a empty Poll
      addPollForm.reset();
      this.selectedPoll = <Poll>{}; // Instance a Empty Poll Class
    }

    addQuestion($event){
      event.preventDefault();
      this.defaultOptions.push({
        optionID: "",
        option: ""
      });
    }

}
