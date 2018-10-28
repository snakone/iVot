import { Component, OnInit} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';

import { Option } from '../../../models/option';
import { Topic } from '../../../models/topic';

import { ProfileService } from '../../../services/profile.service';
import { OptionService } from '../../../services/option.service';

import { MatDialog } from '@angular/material';  // Dialog
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { TopicService } from '../../../services/topic.service';


@Component({
  selector: 'create-option',
  templateUrl: './create-option.component.html',
  styleUrls: ['./create-option.component.css']
})

export class CreateOptionComponent implements OnInit {

  selectedOption: Option = <Option>{};

   constructor(private profile: ProfileService,
               private optionService: OptionService,
               private topicService: TopicService,
               private toastr: ToastrService,
               public dialog: MatDialog,
               @Inject(MAT_DIALOG_DATA) public data: any) {}

   ngOnInit() {}

   onSubmit(form: NgForm){
     let option = {description: form.value.description};
     let eventID = this.profile.eventID;
     let organizationID = this.profile.organizationID;
     let topicID = this.data.topicID;

     if (option.description == undefined)
     alert('Por favor, Rellena el formulario')
     else {
         this.optionService.addOption(organizationID, eventID, topicID, option) // Add Option
          .then(res => {
            this.topicService.getTopics(organizationID, eventID) // After add, get Options again
             .then(res => {
               this.topicService.filteredTopics = res as Topic[];
             }).then(() => {
                 this.toastr.success('Opción Añadida');
                 this.dialog.closeAll();
                 this.resetForm(form); // Reset the FORM
             });
          });
      }
   }

   resetForm(addOptionForm?: NgForm){
    if (addOptionForm != null) // Reset form if not empty and we add a empty Option
      addOptionForm.reset();
      this.selectedOption = <Option>{}; // Instance a Empty Option Class
    }

}
