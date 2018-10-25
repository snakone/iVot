import { Component, OnInit} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';

import { Option } from '../../../models/option';

import { ProfileService } from '../../../services/profile.service';
import { OptionService } from '../../../services/option.service';

import { MatDialog } from '@angular/material';  // Dialog


@Component({
  selector: 'create-option',
  templateUrl: './create-option.component.html',
  styleUrls: ['./create-option.component.css']
})

export class CreateOptionComponent implements OnInit {

  option: Option;
  selectedOption: Option = <Option>{};

   constructor(private profile: ProfileService,
               private optionService: OptionService,
               private toastr: ToastrService,
               public dialog: MatDialog) {}

   ngOnInit() {}

   onSubmit(form: NgForm){
     let option = {description: form.value.description};
     let eventID = this.profile.eventID;
     let organizationID = this.profile.organizationID;
     let topicID = this.profile.topicID;

     if (option.description == undefined)
     alert('Por favor, Rellena el formulario')
     else {
         this.optionService.addOption(organizationID, eventID, topicID, option) // Add Option
          .then(res => {
            this.optionService.getOptions(organizationID, eventID, topicID) // After add, get Options again
             .then(res => {
               this.optionService.options = res as Option[];
             }).then(() => {
                 this.toastr.success('Opción Añadida', 'Muy bien!');
                 this.dialog.closeAll();
                 this.resetForm(form); // Reset the FORM
             });
          });
      }
   }

   resetForm(addOptionForm?: NgForm){
    if (addOptionForm != null) // Reset form if not empty and we add a empty Option
      addOptionForm.reset();
      this.option = <Option>{}; // Instance a Empty Option Class
    }

}
