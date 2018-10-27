import { Component, OnInit, Input } from '@angular/core';

import { ProfileService } from '../../../../../../../../services/profile.service';
import { OptionService } from '../../../../../../../../services/option.service';

import { Topic } from '../../../../../../../../models/topic';
import { Option } from '../../../../../../../../models/option';

import { MatDialog } from '@angular/material';  // Material Dialog


@Component({
  selector: 'topic-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent implements OnInit {

  @Input() topic: Topic;
  options: Option[];

  constructor(private profile: ProfileService,
              public optionService: OptionService,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.getOptions();
  }

  getOptions(){
    this.optionService.getOptions(this.profile.organizationID, this.profile.eventID, this.topic.id)
     .then(res => {
       this.options = res as Option[];
     })
  }


}
