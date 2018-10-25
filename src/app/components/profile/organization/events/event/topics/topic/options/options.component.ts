import { Component, OnInit, Input } from '@angular/core';

import { ProfileService } from '../../../../../../../../services/profile.service';
import { OptionService } from '../../../../../../../../services/option.service';

import { Topic } from '../../../../../../../../models/topic';
import { Option } from '../../../../../../../../models/option';

import { MatDialog } from '@angular/material';  // Material Dialog
import { CreateOptionComponent } from '../../../../../../../static/create-option/create-option.component';

@Component({
  selector: 'topic-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent implements OnInit {

  @Input() topic: Topic;

  constructor(private profile: ProfileService,
              public optionService: OptionService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.profile.topicID = this.topic.id;
    this.getOptions();
  }

  getOptions(){
    this.optionService.getOptions(this.profile.organizationID, this.profile.eventID, this.topic.id)
     .then(res => {
       this.optionService.options = res as Option[];
     })
  }

  openNewOption(){
    const dialogRef = this.dialog.open(CreateOptionComponent,{});  // New Dialog
  }

  addOption(id, option){
    this.optionService.addOption(this.profile.organizationID, this.profile.eventID, id, option)
  }

}
