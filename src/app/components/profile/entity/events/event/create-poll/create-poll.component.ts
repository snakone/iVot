import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';

import { CustomPoll } from '../../../../../../models/poll';

import { Event } from '../../../../../../models/event';

import { EntityService } from '../../../../../../services/entity.service';

@Component({
  selector: 'create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  @Input() entityEvent: Event;

  customPoll: CustomPoll;
  selectedPoll: CustomPoll = <CustomPoll>{};
  entityID: string;

   constructor(private entityService: EntityService,
              private toastr: ToastrService) {}

   ngOnInit() {
     this.entityID = this.entityService.profileID;
   }

   onSubmit(addPollForm: NgForm){

     let question = addPollForm.value.question;
     let option1 = addPollForm.value.option1;
     let option2 = addPollForm.value.option2;
     let option3 = addPollForm.value.option3;
     let option4 = addPollForm.value.option4;
     let eventID = "12345";

     if (option3 == undefined) option3="";
     if (option4 == undefined) option4="";

     if (question == null || option1 == null || option2 == null)
     alert('Por favor, Rellena el formulario')

     else {
         let newPoll: CustomPoll = new CustomPoll (question,option1,option2,option3,option4);

         this.toastr.success('Tema Creado', 'Muy bien!');
         this.resetForm(addPollForm); // Reset the FORM
         this.entityService.pollList.push(newPoll);

         console.log(this.entityService.pollList);
      }
   }

   resetForm(addPollForm?: NgForm){
    if (addPollForm != null) // Reset form if not empty and we add a empty Poll
      addPollForm.reset();
      this.selectedPoll = <CustomPoll>{}; // Instance a Empty Poll Class
}

 }
